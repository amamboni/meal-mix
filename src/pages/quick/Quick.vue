<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import IconLogo from '@/components/IconLogo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useToastStore } from '@/store/toast'
import ToastStatus from '@/types/enums/ToastStatus'
import { useQuickStore } from '@/store/quick'
import OptionCard from './Partials/OptionCard.vue'
import OptionForm from './Partials/OptionForm.vue'
import { sample } from 'lodash'
import { computed, ref } from 'vue'
import SecondaryButton from '@/components/SecondaryButton.vue'

const quickStore = useQuickStore()
const toastStore = useToastStore()

const isGenerating = ref(false)
const interval = ref()

const options = computed(() => quickStore.options)
const selected = computed(() => quickStore.selected)

const clear = () => {
  quickStore.options = []

  toastStore.addToast('Successfully cleared options', ToastStatus.Success)
}

const clearSelected = () => {
  quickStore.selected = ''

  toastStore.addToast('Successfully cleared selected', ToastStatus.Success)
}

const remove = (option: string) => {
  const index = quickStore.options.findIndex((item) => item === option)
  quickStore.options.splice(index, 1)

  toastStore.addToast('Successfully removed option', ToastStatus.Success)
}

const shuffle = () => {
  interval.value = setInterval(() => (quickStore.selected = sample(options.value)), 100)
}

const generate = () => {
  isGenerating.value = true

  shuffle()

  setTimeout(() => {
    clearInterval(interval.value)
    toastStore.addToast('Selected!', ToastStatus.Success)
    isGenerating.value = false
  }, 3000)
}
</script>

<template>
  <MainLayout>
    <div class="flex justify-between items-start gap-2">
      <SectionTitle>
        <template #title> Quick </template>
        <template #description> Just enter your choices and generate</template>
      </SectionTitle>
      <PrimaryButton @click="clear" class="whitespace-nowrap"> Clear List </PrimaryButton>
    </div>

    <OptionForm />

    <div class="flex-1 overflow-auto">
      <div v-if="options.length" class="flex flex-col gap-2">
        <OptionCard
          v-for="option in options"
          :key="option"
          :option="option"
          @remove="remove(option)"
        />
      </div>
      <IconLogo class="w-full h-full" v-else />
    </div>

    <template v-if="selected">
      <h1 class="text-lg font-medium my-2">Chosen: {{ quickStore.selected }}</h1>
    </template>

    <template v-if="options.length">
      <PrimaryButton :disabled="isGenerating" @click="generate">
        {{ isGenerating ? 'Selecting...' : 'Generate!' }}
      </PrimaryButton>
    </template>

    <template v-if="selected && !isGenerating">
      <SecondaryButton @click="clearSelected"> Clear Selected Item </SecondaryButton>
    </template>
  </MainLayout>
</template>
