<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Label'
  }
})
</script>

<template>
  <div class="btn-tag">
    {{ text }}
  </div>
</template>
