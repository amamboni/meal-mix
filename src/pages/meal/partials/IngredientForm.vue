<script setup lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import SelectInput from '@/components/SelectInput.vue'
import TextInput from '@/components/TextInput.vue'
import IconDelete from '@/icons/IconDelete.vue'
import Ingredient from '@/types/Ingedient'
import UnitOfMeasurement from '@/types/enums/UnitOfMeasurement'
import { enumAsOptions } from '@/utils'
import { reactive, watch } from 'vue'

interface Props {
  modelValue: Ingredient
}
const props = defineProps<Props>()

const form = reactive<Ingredient>({
  id: '',
  name: '',
  quantity: 0,
  unit: '',
})

const emit = defineEmits<{
  (e: 'remove'): void
  (e: 'update:modelValue', value: Ingredient): void
}>()

const units = {
  '': 'Select',
  ...enumAsOptions(UnitOfMeasurement),
}

watch(
  () => props.modelValue,
  (value) => {
    form.id = value?.id ?? ''
    form.name = value?.name ?? ''
    form.quantity = value?.quantity ?? ''
    form.unit = value?.unit ?? ''
  },
  { immediate: true }
)

watch(
  form,
  (value) => {
    emit('update:modelValue', value)
  },
  { deep: true }
)
</script>

<template>
  <form class="flex gap-2">
    <TextInput type="number" v-model="form.quantity" placeholder="Qty" class="w-full" />
    <SelectInput v-model="form.unit" :options="units" class="w-full" />
    <TextInput type="text" v-model="form.name" placeholder="Name" class="w-full" />
    <SecondaryButton @click="emit('remove')">
      <IconDelete />
    </SecondaryButton>
  </form>
</template>
