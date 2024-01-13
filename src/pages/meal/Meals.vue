<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TextInput from '@/components/TextInput.vue'
import IconLogo from '@/icons/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMealStore } from '@/store/meal'
import Meal from '@/types/Meal'
import { computed, ref } from 'vue'
import MealCard from './partials/MealCard.vue'

const mealStore = useMealStore()

const search = ref('')
const meals = computed(() => mealStore.meals)

const mealsFiltered = computed(() =>
  meals.value.filter((meal) =>
    meal?.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  )
)

const remove = (meal: Meal) => {
  const index = mealStore.meals.findIndex((item) => item?.id === meal?.id)
  mealStore.meals.splice(index, 1)
}
</script>

<template>
  <MainLayout>
    <div class="flex justify-between items-start gap-2">
      <SectionTitle>
        <template #title> Meals </template>
        <template #description> Here you can view, create, and update your meals </template>
      </SectionTitle>
      <LinkButton :to="{ name: 'create-meal' }" class="whitespace-nowrap">Create Meal</LinkButton>
    </div>

    <TextInput type="search" v-model="search" placeholder="Search" />

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
