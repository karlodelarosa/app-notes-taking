<script setup lang="ts">
import SidebarPanel from '../organism/SidebarPanel.vue'
import TopMenu from '../molecules/menu/TopMenu.vue'
</script>

<template>
  <div class="w-full h-screen md:flex bg-red-200">
    <SidebarPanel />
    <div class="flex-1 bg-neutral-1 min-h-screen h-fit">
      <TopMenu />
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>
