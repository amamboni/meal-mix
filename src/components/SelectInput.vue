<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  options?: any
  modelValue?: string | number | null
}

withDefaults(defineProps<Props>(), {
  options: null,
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const select = ref<HTMLSelectElement | null>(null)

const onUpdate = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLSelectElement)?.value)
}

onMounted(() => {
  if (select.value && select.value.hasAttribute('autofocus')) {
    select.value.focus()
  }
})

defineExpose({
  focus: () => {
    if (select.value) select.value.focus()
  },
})
</script>

<template>
  <select
    ref="select"
    class="p-2.5 pr-10 rounded bg-classes text-classes border-classes transition-classes"
    :value="modelValue"
    @change="onUpdate"
  >
    <option v-for="(option, id) in options" :key="id" :value="id">
      {{ option }}
    </option>
  </select>
</template>

<style scoped>
.bg-classes {
  @apply bg-white disabled:bg-zinc;
}

.text-classes {
  @apply disabled:text-stone;
}

.border-classes {
  @apply border border-slate hover:border-gray focus:border-primary focus:ring-0 disabled:border-slate;
}

.transition-classes {
  @apply transition ease-in-out duration-150;
}
</style>
