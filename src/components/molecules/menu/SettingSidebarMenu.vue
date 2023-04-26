<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const sidebarMenu = ['General', 'Account', 'Labels']

const store = useStore()
// const selectedItem = computed(() => store.getters['settings/GET_activeComponent'])
const selectedItem = computed(() => store.getters['settings/GET_selectedMenuID'])
const selectItem = (key: number, item: string) => {
  store.dispatch('settings/setActiveComponent', item.toLowerCase())
  store.dispatch('settings/setActiveComponentId', key)
}
</script>

<template>
  <div class="menu pl-[20px]">
    <div class="menu pl-[20px]">
      <template v-for="(item, key) in sidebarMenu" :key="key">
        <a class="settings-link" @click="selectItem(key, item)" :class="{ 'bg-gray-500 text-white': key === selectedItem}">
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
