<script setup lang="ts">
import DropdownLabel from '@/components/DropdownLabel.vue'
import { useMealStore } from '@/store/meal'
import { useToastStore } from '@/store/toast'
import ToastStatus from '@/types/enums/ToastStatus'
import Meal from '@/types/Meal'
import { computed } from 'vue'

const mealStore = useMealStore()
const toastStore = useToastStore()

const meals = computed(() => mealStore.meals)

const isValidJSON = (string: string) => {
  try {
    return JSON.parse(string)
  } catch (e) {
    console.log(e)

    return false
  }
}

const checkContents = (items: any[]) => {
  for (const item of items) {
    if (!item?.id && !item?.name && !item?.ingredients && !item?.tags) {
      return false
    }
  }

  return true
}

const addItems = (items: Meal[]) => {
  items?.forEach((item) => {
    if (!meals.value.find((meal) => meal?.name === item?.name)) {
      mealStore.meals.push(item)
    }
  })
}

const importMeals = (event: Event) => {
  const target = event?.target as HTMLInputElement
  const files = target?.files
  const reader = new FileReader()

  reader.onload = (e) => {
    const fileContents = e?.target?.result?.toString()
    const json = isValidJSON(fileContents ?? '')

    if (json) {
      if (checkContents(json)) {
        addItems(json)
      } else {
        toastStore.addToast('Invalid file contents', ToastStatus.Danger)
      }
    } else {
      toastStore.addToast('Unable to read file', ToastStatus.Danger)
    }
  }

  reader.readAsText(files?.[0] as Blob)
}
</script>

<template>
  <DropdownLabel>
    <input id="importMeals" type="file" @change="importMeals" class="hidden" />
    <p>Import Meal</p>
  </DropdownLabel>
</template>
