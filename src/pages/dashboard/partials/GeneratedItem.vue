<script setup lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import { useMealStore } from '@/store/meal'
import Meal from '@/types/Meal'
import { computed } from 'vue'

interface Props {
  meal: Meal
}

const props = defineProps<Props>()

const mealStore = useMealStore()
const list = computed(() => mealStore.list)

const add = () => {
  if (!list.value.find((item) => item?.id === props.meal?.id)) {
    mealStore.list.push(props.meal)
  }
}
</script>

<template>
  <div class="bg-white p-2.5 rounded">
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <h1 class="font-medium">{{ meal?.name }}</h1>
        <SecondaryButton @click="add"> Add to List </SecondaryButton>
      </div>

      <template v-for="ingredient in meal?.ingredients" :key="ingredient?.id">
        <p class="flex justify-between gap-2">
          <span>{{ ingredient?.quantity }} {{ ingredient?.unit }}</span>
          <span>{{ ingredient?.name }}</span>
        </p>
      </template>
    </div>
  </div>
</template>
