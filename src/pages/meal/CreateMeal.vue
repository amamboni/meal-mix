<script setup lang="ts">
import buttonClasses from '@/classes/button'
import Icon from '@/components/Icon.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { ArrowLeft } from 'lucide-vue-next'
import MealForm from './partials/MealForm.vue'
</script>

<template>
  <MainLayout>
    <RouterLink :to="{ name: 'meals' }" class="w-fit" :class="buttonClasses.all()">
      <Icon :icon="ArrowLeft" />
    </RouterLink>

    <MealForm class="flex-1 overflow-auto p-1" />
  </MainLayout>
</template>
