<script setup lang="ts">
import { useMealStore } from '@/store/meal'
import { computed } from 'vue'
import GeneratedItem from './GeneratedItem.vue'

const mealStore = useMealStore()

const generated = computed(() => mealStore.generated)
</script>

<template>
  <div class="space-y-2">
    <GeneratedItem v-for="(meal, index) in generated" :meal="meal" :key="index" />
  </div>
</template>
