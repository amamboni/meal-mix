import { defineStore } from 'pinia'
import { persist } from './persist'

interface State {
  options: string[]
  selected?: string
}

export const useQuickStore = defineStore('quick', {
  state: () =>
    ({
      options: [],
      selected: '',
    } as State),
  persist,
})
