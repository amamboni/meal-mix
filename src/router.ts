import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./pages/dashboard/Dashboard.vue'),
  },
  {
    path: '/meals',
    name: 'meals',
    component: () => import('./pages/meal/Meals.vue'),
  },
  {
    path: '/meals/create',
    name: 'create-meal',
    component: () => import('./pages/meal/CreateMeal.vue'),
  },
  {
    path: '/meals/:id',
    name: 'edit-meal',
    component: () => import('./pages/meal/EditMeal.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
