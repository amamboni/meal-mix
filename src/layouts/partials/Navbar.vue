<script setup lang="ts">
import IconDashboard from '@/icons/IconDashboard.vue'
import IconList from '@/icons/IconList.vue'
import NavbarLink from './NavbarLink.vue'
</script>

<template>
  <nav>
    <ul class="grid grid-flow-col">
      <li>
        <NavbarLink :to="{ name: 'dashboard' }" title="Dashboard">
          <IconDashboard /> Dashboard
        </NavbarLink>
      </li>
      <li>
        <NavbarLink :to="{ name: 'meals' }" title="Meals"> <IconList /> Meals </NavbarLink>
      </li>
    </ul>
  </nav>
</template>
