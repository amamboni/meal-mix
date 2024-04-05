<script setup lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import IconLogo from '@/icons/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMealStore } from '@/store/meal'
import { useToastStore } from '@/store/toast'
import ToastStatus from '@/types/enums/ToastStatus'
import { computed } from 'vue'
import GenerateForm from './partials/GenerateForm.vue'
import GeneratedList from './partials/GeneratedList.vue'

const mealStore = useMealStore()
const toastStore = useToastStore()

const meals = computed(() => mealStore.meals)
const generated = computed(() => mealStore.generated)

const clear = () => {
  mealStore.generated = []

  toastStore.addToast('Successfully cleared list', ToastStatus.Success)
}
</script>

<template>
  <MainLayout>
    <SectionTitle>
      <template #title> Welcome to MealMix! </template>
      <template #description>
        <span v-if="meals.length"> Generate your meals below </span>
        <span v-else> You don't have any meals yet. Please add some on the Meals page </span>
      </template>
    </SectionTitle>

    <GenerateForm v-if="meals.length" class="mb-4" />

    <template v-if="generated.length">
      <SectionTitle>
        <template #title> Here are your meals! </template>
      </SectionTitle>

      <div class="flex-1 overflow-auto">
        <GeneratedList />
      </div>

      <SecondaryButton @click="clear">Clear List</SecondaryButton>
    </template>

    <IconLogo class="flex-1 w-full h-full" v-else />
  </MainLayout>
</template>
