import Toast from '@/types/Toast'
import ToastStatus from '@/types/enums/ToastStatus'
import { defineStore } from 'pinia'

interface State {
  toasts: Toast[]
}

export const useToastStore = defineStore('toasts', {
  state: () =>
    ({
      toasts: [],
    } as State),
  actions: {
    addToast(message: string, status: ToastStatus = ToastStatus.Info) {
      const id = new Date().getTime().toString()

      this.toasts.push({
        id,
        status,
        message,
      })
    },
    removeToast(id: string) {
      const index = this.toasts.findIndex((toast) => toast.id === id)
      this.toasts.splice(index, 1)
    },
  },
})
