<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ArrowLeft } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import MealForm from './partials/MealForm.vue'

const route = useRoute()

const id = route.params?.id?.toString()
</script>

<template>
  <MainLayout>
    <RouterLink :to="{ name: 'meals' }" class="w-fit">
      <Icon :icon="ArrowLeft" />
    </RouterLink>

    <MealForm :id="id" class="flex-1 overflow-auto p-1" />
  </MainLayout>
</template>
