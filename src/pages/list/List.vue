<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import IconLogo from '@/icons/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMealStore } from '@/store/meal'
import { computed } from 'vue'
import MealCard from './partials/MealCard.vue'

const mealStore = useMealStore()

const list = computed(() => mealStore.list)
</script>

<template>
  <MainLayout>
    <SectionTitle>
      <template #title> Your List </template>
      <template #description> Here are the meals you've added to the list </template>
    </SectionTitle>

    <div class="flex-1 overflow-auto">
      <div v-if="list.length" class="flex flex-col gap-2">
        <MealCard v-for="meal in list" :key="meal?.id" :meal="meal" />
      </div>
      <IconLogo class="w-full h-full" v-else />
    </div>
  </MainLayout>
</template>
