<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import { Trash2 } from 'lucide-vue-next'

interface Props {
  option: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-start gap-2 p-2.5 bg-white rounded">
    <h1 class="font-medium text-wrap">{{ option }}</h1>

    <SecondaryButton @click="$emit('remove')">
      <Icon :icon="Trash2" />
    </SecondaryButton>
  </div>
</template>
