<script setup lang="ts">
defineProps<{
  text?: string
  page?: string
}>()
</script>

<template>
  <RouterLink
    :to="{ name: page }"
    class="text-black hover:text-gray-600 transition-all duration-100 ease-in"
  >
    {{ text }}
  </RouterLink>
</template>
