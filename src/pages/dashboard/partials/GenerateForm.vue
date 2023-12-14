<script setup lang="ts">
import Dropdown from '@/components/Dropdown.vue'
import DropdownButton from '@/components/DropdownButton.vue'
import FormInput from '@/components/FormInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import TextInput from '@/components/TextInput.vue'
import { useMealStore } from '@/store/meal'
import { sampleSize } from 'lodash'
import { computed, ref } from 'vue'
import TagFilter from './TagFilter.vue'

const mealStore = useMealStore()
const meals = computed(() => mealStore.meals)
const tags = ref<string[]>([])

const count = ref(1)

const generate = () => {
  const items = tags.value.length
    ? meals.value.filter((meal) => meal.tags?.some((tag) => tags.value.includes(tag)))
    : meals.value
  mealStore.generated = sampleSize(items, count.value)
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

      <Dropdown :close-on-click="false" full-width>
        <template #trigger>
          <DropdownButton>Filter by Tags</DropdownButton>
        </template>
        <template #content>
          <div class="p-2 flex flex-col gap-2">
            <TagFilter v-model="tags" />
          </div>
        </template>
      </Dropdown>

      <PrimaryButton type="submit">Generate!</PrimaryButton>
    </form>
  </div>
</template>
