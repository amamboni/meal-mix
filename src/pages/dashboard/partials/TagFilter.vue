<script setup lang="ts">
import { useMealStore } from '@/store/meal'
import { computed } from 'vue'

interface Props {
  modelValue: string[]
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const mealStore = useMealStore()

const tags = computed(() => mealStore.tags)

const tagsList = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <label v-for="tag in tags" :key="tag" class="flex items-center gap-2">
    <input type="checkbox" v-model="tagsList" class="text-primary !ring-primary" :value="tag" />
    {{ tag }}
  </label>
</template>
