<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import IconLogo from '@/icons/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMealStore } from '@/store/meal'
import Meal from '@/types/Meal'
import { computed } from 'vue'
import MealCard from './partials/MealCard.vue'

const mealStore = useMealStore()

const list = computed(() => mealStore.list)

const clear = () => {
  mealStore.list = []
}

const remove = (meal: Meal) => {
  const index = mealStore.list.findIndex((item) => item?.id === meal?.id)
  mealStore.list.splice(index, 1)
}
</script>

<template>
  <MainLayout>
    <div class="flex justify-between items-start gap-2">
      <SectionTitle>
        <template #title> Your List </template>
        <template #description> Here are the meals you've added to the list </template>
      </SectionTitle>
      <PrimaryButton @click="clear" class="whitespace-nowrap"> Clear List </PrimaryButton>
    </div>

    <div class="flex-1 overflow-auto">
      <div v-if="list.length" class="flex flex-col gap-2">
        <MealCard v-for="meal in list" :key="meal?.id" :meal="meal" @remove="remove(meal)" />
      </div>
      <IconLogo class="w-full h-full" v-else />
    </div>
  </MainLayout>
</template>
