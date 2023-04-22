<script setup lang="ts">
import SearchField from '../atom/input/SearchField.vue'
defineProps({
  pageName: {
    type: String,
    default: 'PAGE NAME'
  }
})
</script>

<template>
  <div class="content-space">
    <div class="px-[50px]">
      <header class="flex items-center justify-between mb-[20px]">
        <h1 class="page-title">{{ pageName }}</h1>
        <div class="w-72">
          <SearchField />
        </div>
      </header>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.content-space {
  @apply pl-80 py-[110px];
}
.page-title {
  @apply text-4xl font-bold uppercase text-gray-700;
}
</style>
