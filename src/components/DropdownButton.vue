<script setup lang="ts">
import IconChevronDown from '@/icons/IconChevronDown.vue'
import IconChevronUp from '@/icons/IconChevronUp.vue'
import SecondaryButton from './SecondaryButton.vue'

interface Props {
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <SecondaryButton class="w-full flex gap-2 items-center justify-between text-left">
    <div class="grow truncate">
      <slot />
    </div>
    <IconChevronUp v-if="active" class="text-gray shrink-0" />
    <IconChevronDown v-else class="text-gray shrink-0" />
  </SecondaryButton>
</template>
