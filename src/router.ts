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
  {
    path: '/quick',
    name: 'quick',
    component: () => import('./pages/quick/Quick.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('./pages/list/List.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/meal-mix/'),
  routes,
})

export default router
