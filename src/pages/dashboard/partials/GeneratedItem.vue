<script setup lang="ts">
import Meal from '@/types/Meal'

interface Props {
  meal: Meal
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2 bg-white p-2.5 rounded">
    <h1 class="font-medium">{{ meal?.name }}</h1>

    <template v-for="ingredient in meal?.ingredients" :key="ingredient?.id">
      <p class="flex justify-between gap-2">
        <span>{{ ingredient?.quantity }} {{ ingredient?.unit }}</span>
        <span>{{ ingredient?.name }}</span>
      </p>
    </template>
  </div>
</template>
