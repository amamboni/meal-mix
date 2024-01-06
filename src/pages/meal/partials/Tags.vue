<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TextInput from '@/components/TextInput.vue'
import { trim } from 'lodash'
import { computed, ref } from 'vue'
import Tag from './Tag.vue'

interface Props {
  modelValue: string[]
}

const props = defineProps<Props>()

const tag = ref('')

const tags = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const add = () => {
  const value = trim(tag.value)
  if (value && !tags.value.includes(value)) {
    tags.value.push(value)
  }
  tag.value = ''
}

const remove = (index: number) => {
  tags.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div class="mb-2 flex items-center justify-between gap-2">
      <SectionTitle>
        <template #title> Tags: </template>
      </SectionTitle>
      <div class="flex gap-2">
        <TextInput v-model="tag" class="w-full" />
        <PrimaryButton @click.prevent="add">Add</PrimaryButton>
      </div>
    </div>

    <div class="space-y-2">
      <div class="flex flex-wrap gap-2">
        <Tag v-for="(tag, index) in tags" @remove="remove(index)">{{ tag }}</Tag>
      </div>
    </div>
  </div>
</template>
