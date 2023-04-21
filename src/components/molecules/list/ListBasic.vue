<script setup lang="ts">
defineProps<{
  items?: string[]
}>()
</script>

<template>
  <ul class="py-[25px]">
    <li v-for="(item, key) in items" :key="key" class="flex flex-row items-center gap-2">
      <slot name="icon"></slot>
      <p class="text-white text-lg">{{ item }}</p>
    </li>
  </ul>
</template>
