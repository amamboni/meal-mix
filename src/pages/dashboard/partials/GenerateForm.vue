<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import TextInput from '@/components/TextInput.vue'
import { useMealStore } from '@/store/meal'
import { sampleSize } from 'lodash'
import { computed, ref } from 'vue'

const mealStore = useMealStore()
const meals = computed(() => mealStore.meals)

const count = ref(1)

const generate = () => {
  mealStore.generated = sampleSize(meals.value, count.value)
}
</script>

<template>
  <div>
    <form @submit.prevent="generate" class="flex flex-col gap-2">
      <FormInput id="count">
        <template #label>How many meals?</template>
        <template #default="{ id }">
          <TextInput :id="id" type="number" v-model="count" autofocus></TextInput>
        </template>
      </FormInput>
      <PrimaryButton>Generate!</PrimaryButton>
    </form>
  </div>
</template>
