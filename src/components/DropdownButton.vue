<script setup lang="ts">
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import Icon from './Icon.vue'
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
    <Icon :icon="active ? ChevronUp : ChevronDown" class="text-gray shrink-0" />
  </SecondaryButton>
</template>
