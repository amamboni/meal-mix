<script setup lang="ts">
import IconArrowLeft from '@/icons/IconArrowLeft.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import MealForm from './partials/MealForm.vue'

const route = useRoute()

const id = route.params?.id?.toString()
</script>

<template>
  <MainLayout>
    <RouterLink :to="{ name: 'meals' }" class="w-fit">
      <IconArrowLeft />
    </RouterLink>

    <MealForm :id="id" class="flex-1 overflow-auto p-1" />
  </MainLayout>
</template>
