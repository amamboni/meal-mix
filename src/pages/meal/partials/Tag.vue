<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import { Trash2 } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <div class="bg-white p-2 rounded flex items-center gap-2">
    <slot />
    <SecondaryButton @click="emit('remove')">
      <Icon :icon="Trash2" />
    </SecondaryButton>
  </div>
</template>
