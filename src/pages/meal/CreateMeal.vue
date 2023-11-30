<script setup lang="ts">
import IconArrowLeft from '@/icons/IconArrowLeft.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import MealForm from './partials/MealForm.vue'
</script>

<template>
  <MainLayout>
    <RouterLink :to="{ name: 'meals' }" class="w-fit">
      <IconArrowLeft />
    </RouterLink>

    <MealForm class="flex-1 overflow-auto p-1" />
  </MainLayout>
</template>
