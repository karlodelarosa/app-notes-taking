<script setup lang="ts">
import SidebarMenu from '../molecules/menu/SidebarMenu.vue'
</script>

<template>
  <aside class="sidebar-panel">
    <div class="sidebar-app-name">
      <h1 class="">NOTE TAKING</h1>
    </div>
    <SidebarMenu />
  </aside>
</template>

<style scoped>
.sidebar-panel {
  @apply flex-none w-full md:max-w-xs bg-accent-1 text-white fixed top-0 bottom-0 left-0 z-50;
}

.sidebar-app-name {
  @apply h-[75px] bg-accent-3 flex flex-col items-center justify-center mb-[50px];
}

.sidebar-app-name > h1 {
  @apply text-white text-xl font-bold;
}
</style>
