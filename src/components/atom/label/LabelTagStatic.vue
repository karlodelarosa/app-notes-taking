<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Label'
  }
})
</script>

<template>
  <div class="note-label">
    {{ text }}
  </div>
</template>

<style scoped>
.note-label {
  @apply w-fit px-[15px] py-1 rounded-full text-xs border-2 bg-green-500 text-white uppercase;
}

</style>
