<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Label'
  },
  status: {
    type: Boolean,
    default: false
  }
})

const { text, status } = toRefs(props)

const statusReactive = ref(status.value)
watch(status, () => {
  statusReactive.value = status.value
})

const toggleStatus = () => {
  statusReactive.value = !statusReactive.value
}
</script>

<template>
  <div class="note-label" :class="{ active: statusReactive }" @click="toggleStatus()">
    {{ text }}
  </div>
</template>

<style scoped>
.note-label {
  @apply w-fit px-[15px] py-1 rounded-full text-xs border-2 border-green-500 text-green-500 bg-white uppercase cursor-pointer hover:brightness-90 transition-all duration-100;
}

.note-label.active {
  @apply bg-green-500 text-white;
}
</style>
