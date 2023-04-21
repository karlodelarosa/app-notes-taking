<script setup lang="ts">
import SearchIcon from '@/components/atom/svg/SearchIcon.vue'
</script>

<template>
  <div class="w-full ml-auto relative">
    <input type="text" placeholder="Search notes" class="search-input" />
    <SearchIcon class="absolute right-[13px] top-[11px]" />
  </div>
</template>

<style scoped>
.search-input {
  @apply w-full pl-[15px] pr-[40px] py-[8px] rounded-custom-input border border-gray-400 bg-white;
}
</style>
