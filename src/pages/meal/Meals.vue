<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import IconLogo from '@/icons/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMealStore } from '@/store/meal'
import { computed } from 'vue'
import MealCard from './partials/MealCard.vue'

const mealStore = useMealStore()

const meals = computed(() => mealStore.meals)

const remove = (index: number) => {
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

    <div class="flex-1 overflow-auto space-y-2">
      <template v-if="meals.length">
        <MealCard
          v-for="(meal, index) in meals"
          :key="index"
          :meal="meal"
          @remove="remove(index)"
        />
      </template>

      <IconLogo class="w-full h-full" v-else />
    </div>
  </MainLayout>
</template>
