<script setup lang="ts">
import DropdownLabel from '@/components/DropdownLabel.vue'
import { useMealStore } from '@/store/meal'
import { computed } from 'vue'

const mealStore = useMealStore()

const meals = computed(() => mealStore.meals)

const exportMeals = () => {
  const fileURL = window.URL.createObjectURL(new Blob([JSON.stringify(meals.value)]))
  const fURL = document.createElement('a')

  fURL.href = fileURL
  fURL.setAttribute('download', 'meals.json')

  document.body.appendChild(fURL)

  fURL.click()
  fURL.remove()
}
</script>

<template>
  <DropdownLabel @click="exportMeals"> Export Meals </DropdownLabel>
</template>
