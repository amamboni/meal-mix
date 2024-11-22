<script setup lang="ts">
import { useToastStore } from '@/store/toast'
import Toast from '@/types/Toast'
import ToastStatus from '@/types/enums/ToastStatus'
import { X } from 'lucide-vue-next'
import { computed, onMounted } from 'vue'
import Icon from '../Icon.vue'
import SecondaryButton from '../SecondaryButton.vue'

interface Props {
  toast: Toast
}

const props = defineProps<Props>()

const toastStore = useToastStore()

const dismiss = () => {
  toastStore.removeToast(props.toast.id)
}

const statusClass = computed(() => {
  switch (props.toast?.status) {
    case ToastStatus.Info:
      return 'bg-blue-light'
    case ToastStatus.Warning:
      return 'bg-orange-light'
    case ToastStatus.Danger:
      return 'bg-red-light'
    case ToastStatus.Success:
      return 'bg-green-light'
  }
})

onMounted(() => {
  setTimeout(() => {
    dismiss()
  }, 5000)
})
</script>

<template>
  <div
    class="flex items-center gap-2 w-fit max-w-xs px-4 py-3 rounded-lg shadow z-50 border"
    :class="statusClass"
    role="alert"
  >
    <p class="font-normal">
      {{ toast?.message }}
    </p>
    <SecondaryButton class="!bg-transparent border-none" @click.prevent="dismiss">
      <Icon :icon="X" />
    </SecondaryButton>
  </div>
</template>
