import Meal from '@/types/Meal'
import { flatMapDeep, uniq } from 'lodash'
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
  getters: {
    tags: (state) => uniq(flatMapDeep(state.meals, 'tags')),
  },

  persist,
})
