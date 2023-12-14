<script setup lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import IconDelete from '@/icons/IconDelete.vue'

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <div class="bg-white p-2 rounded flex items-center gap-2">
    <slot />
    <SecondaryButton @click="emit('remove')">
      <IconDelete />
    </SecondaryButton>
  </div>
</template>
