<script setup lang="ts">
defineProps<{
  text?: string,
  page?: string
}>()
</script>

<template>
  <RouterLink :to="{ name: page }" class="flex items-center px-[10px] py-[10px] hover:bg-accent-2 transition-all duration-100 ease-in">
    {{ text }}
  </RouterLink>
</template>