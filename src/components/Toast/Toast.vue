<script setup lang="ts">
import { useToastStore } from '@/store/toast'
import { computed } from 'vue'
import ToastItem from './ToastItem.vue'

const toastStore = useToastStore()
const toasts = computed(() => toastStore.toasts)
</script>

<template>
  <div
    v-show="toasts.length"
    class="fixed top-2 right-4 flex flex-col items-end gap-2 max-h-dvh overflow-auto p-2 z-50"
  >
    <TransitionGroup
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <ToastItem v-for="(toast, index) in toasts" :key="index" :toast="toast" />
    </TransitionGroup>
  </div>
</template>
