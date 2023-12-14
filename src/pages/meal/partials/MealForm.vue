<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import TextInput from '@/components/TextInput.vue'
import router from '@/router'
import { useMealStore } from '@/store/meal'
import Meal from '@/types/Meal'
import { cloneDeep } from 'lodash'
import { computed, reactive } from 'vue'
import Ingredients from './Ingredients.vue'
import Tags from './Tags.vue'

interface Props {
  id?: string
}

const props = defineProps<Props>()

const mealStore = useMealStore()

const meal = computed(() => cloneDeep(mealStore.meals.find((meal) => meal?.id === props?.id)))

const form = reactive<Meal>({
  id: props?.id ? meal.value?.id || '' : new Date().getTime().toString(),
  name: props?.id ? meal.value?.name || '' : '',
  ingredients: props?.id ? meal.value?.ingredients || [] : [],
  tags: props?.id ? meal.value?.tags || [] : [],
})

const submit = () => {
  if (form.name) {
    if (props?.id) {
      const mealIndex = mealStore.meals.findIndex((meal) => meal?.id === props?.id)
      if (mealIndex !== -1) {
        mealStore.meals.splice(mealIndex, 1, form)
      }
    } else {
      mealStore.meals.push(form)
    }

    router.push({ name: 'meals' })
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="flex flex-col gap-2">
    <FormInput id="name">
      <template #label>Meal Name</template>
      <template #default="{ id }">
        <TextInput :id="id" type="text" v-model="form.name" placeholder="Chicken" />
      </template>
    </FormInput>

    <div class="flex-1 overflow-auto p-2">
      <Ingredients v-model="form.ingredients" />
    </div>

    <div class="flex-1 overflow-auto p-2">
      <Tags v-model="form.tags" />
    </div>

    <PrimaryButton type="submit" class="w-full mt-auto">
      {{ id ? 'Update' : 'Create' }} Meal
    </PrimaryButton>
  </form>
</template>
