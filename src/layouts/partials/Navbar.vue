<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { BookText, FastForward, LayoutDashboard, ListCheck } from 'lucide-vue-next'
import NavbarLink from './NavbarLink.vue'
</script>

<template>
  <nav>
    <ul class="grid grid-cols-4">
      <li>
        <NavbarLink :to="{ name: 'dashboard' }" title="Dashboard">
          <Icon :icon="LayoutDashboard" /> Dashboard
        </NavbarLink>
      </li>
      <li>
        <NavbarLink :to="{ name: 'list' }" title="Your List">
          <Icon :icon="ListCheck" /> Your List
        </NavbarLink>
      </li>
      <li>
        <NavbarLink :to="{ name: 'quick' }" title="Quick">
          <Icon :icon="FastForward" /> Quick
        </NavbarLink>
      </li>
      <li>
        <NavbarLink :to="{ name: 'meals' }" title="Meals">
          <Icon :icon="BookText" /> Meals
        </NavbarLink>
      </li>
    </ul>
  </nav>
</template>
