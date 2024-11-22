<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import TextInput from '@/components/TextInput.vue'
import { useQuickStore } from '@/store/quick'
import { computed, ref } from 'vue'

const quickStore = useQuickStore()
const options = computed(() => quickStore.options)

const option = ref('')

const addOption = () => {
  if (option.value && !options.value.includes(option.value)) {
    quickStore.options.push(option.value)
    option.value = ''
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="addOption" class="flex flex-col gap-2">
      <FormInput id="option">
        <template #label>Enter Item</template>
        <template #default="{ id }">
          <TextInput :id="id" v-model="option" />
        </template>
      </FormInput>

      <PrimaryButton type="submit">Add</PrimaryButton>
    </form>
  </div>
</template>
