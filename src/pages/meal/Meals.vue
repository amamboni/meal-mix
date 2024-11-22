<script setup lang="ts">
import Dropdown from '@/components/Dropdown.vue'
import DropdownButton from '@/components/DropdownButton.vue'
import LinkButton from '@/components/LinkButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TagFilter from '@/components/TagFilter.vue'
import TextInput from '@/components/TextInput.vue'
import IconLogo from '@/components/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMealStore } from '@/store/meal'
import { useToastStore } from '@/store/toast'
import ToastStatus from '@/types/enums/ToastStatus'
import Meal from '@/types/Meal'
import { computed, ref } from 'vue'
import ExportMealsButton from './partials/ExportMealsButton.vue'
import ImportMealsButton from './partials/ImportMealsButton.vue'
import MealCard from './partials/MealCard.vue'

const mealStore = useMealStore()
const toastStore = useToastStore()

const search = ref('')
const tags = ref<string[]>([])
const meals = computed(() => mealStore.meals)

const mealsFiltered = computed(() =>
  meals.value
    .filter((meal) => meal?.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
    .filter((meal) => tags.value?.every((tag) => meal.tags?.includes(tag)))
)

const remove = (meal: Meal) => {
  const index = mealStore.meals.findIndex((item) => item?.id === meal?.id)
  mealStore.meals.splice(index, 1)

  toastStore.addToast('Successfully removed meal', ToastStatus.Success)
}
</script>

<template>
  <MainLayout>
    <div class="flex justify-between items-start gap-2">
      <SectionTitle>
        <template #title> Meals </template>
        <template #description> Here you can view, create, and update your meals </template>
      </SectionTitle>

      <div class="flex flex-wrap justify-end gap-2">
        <Dropdown>
          <template #trigger>
            <DropdownButton> Options </DropdownButton>
          </template>

          <template #content>
            <div class="p-2 flex flex-col gap-2 divide-y">
              <ImportMealsButton />
              <ExportMealsButton />
            </div>
          </template>
        </Dropdown>

        <LinkButton :to="{ name: 'create-meal' }" class="whitespace-nowrap">Create Meal</LinkButton>
      </div>
    </div>

    <TextInput type="search" v-model="search" placeholder="Search" />

    <Dropdown :close-on-click="false" full-width>
      <template #trigger>
        <DropdownButton>Filter by Tags</DropdownButton>
      </template>
      <template #content>
        <div class="p-2 flex flex-col gap-2">
          <TagFilter v-model="tags" />
        </div>
      </template>
    </Dropdown>

    <div class="flex-1 overflow-auto">
      <div v-if="meals.length">
        <div v-if="mealsFiltered.length" class="grid grid-cols-2 gap-2">
          <MealCard
            v-for="meal in mealsFiltered"
            :key="meal?.id"
            :meal="meal"
            @remove="remove(meal)"
          />
        </div>
        <div v-else>
          <p>No results.</p>
        </div>
      </div>
      <IconLogo class="w-full h-full" v-else />
    </div>
  </MainLayout>
</template>
