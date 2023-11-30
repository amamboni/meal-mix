import Meal from '@/types/Meal'
import { defineStore } from 'pinia'
import { persist } from './persist'

interface State {
  meals: Meal[]
  generated: Meal[]
}

export const useMealStore = defineStore('meals', {
  state: () =>
    ({
      meals: [],
      generated: [],
    } as State),

  persist,
})
