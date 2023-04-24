<script setup lang="ts">
import SidebarLink from '@/components/atom/link/SidebarLink.vue'

const sidebarMenu = [
  { name: 'Dashboard', path: 'home' },
  { name: 'Notes', path: 'notes' }
]
</script>

<template>
  <div class="menu pl-[20px]">
    <div class="menu pl-[20px]">
      <template v-for="(item, key) in sidebarMenu" :key="key">
        <SidebarLink :page="item.path" :text="item.name" />
      </template>
    </div>
  </div>
</template>
