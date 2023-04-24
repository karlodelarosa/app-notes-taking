<script setup lang="ts">
const sidebarMenu = ['General', 'Account', 'Labels']
</script>

<template>
  <div class="menu pl-[20px]">
    <div class="menu pl-[20px]">
      <template v-for="(item, key) in sidebarMenu" :key="key">
        <a class="settings-link">
          {{ item }}
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.settings-link {
  @apply flex items-center px-[10px] py-[10px] cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-100 ease-in;
}
</style>
