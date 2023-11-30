<script setup lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import Ingredient from '@/types/Ingedient'
import UnitOfMeasurement from '@/types/enums/UnitOfMeasurement'
import { computed } from 'vue'
import IngredientForm from './IngredientForm.vue'

interface Props {
  modelValue: Ingredient[]
}

const props = defineProps<Props>()

const ingredients = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Ingredient[]): void
}>()

const add = () => {
  ingredients.value.push({
    id: new Date().getTime().toString(),
    name: '',
    quantity: 0,
    unit: UnitOfMeasurement.Pc,
  })
}

const remove = (index: number) => {
  ingredients.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <SectionTitle>
        <template #title> Ingredients: </template>
      </SectionTitle>

      <SecondaryButton @click.prevent="add">Add Ingredient</SecondaryButton>
    </div>

    <div class="space-y-2">
      <IngredientForm
        v-for="(ingredient, key) in ingredients"
        :key="key"
        v-model="ingredients[key]"
        :ingredient="ingredient"
        @remove="remove(key)"
      />
    </div>
  </div>
</template>
