<script setup lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import IconDelete from '@/icons/IconDelete.vue'
import Meal from '@/types/Meal'

interface Props {
  meal: Meal
}

defineProps<Props>()

defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <div class="flex justify-between items-start gap-2 p-2.5 bg-white rounded">
    <div class="flex flex-col gap-2">
      <h1 class="font-medium">{{ meal?.name }}</h1>

      <template v-for="ingredient in meal?.ingredients" :key="ingredient?.id">
        <p class="flex justify-between gap-2">
          <span>{{ ingredient?.quantity }} {{ ingredient?.unit }}</span>
          <span>{{ ingredient?.name }}</span>
        </p>
      </template>

      <div class="flex flex-wrap gap-2">
        <template v-for="tag in meal?.tags" :key="tag">
          <span class="bg-slate rounded-xl p-2 text-sm">{{ tag }} </span>
        </template>
      </div>
    </div>

    <SecondaryButton @click="$emit('remove')">
      <IconDelete />
    </SecondaryButton>
  </div>
</template>
