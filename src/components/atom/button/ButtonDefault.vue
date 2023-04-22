<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  size: {
    type: String,
    default: 'default'
  }
})

const additionalClass = ref('')
switch (props.size) {
  case 'sm':
    additionalClass.value = 'h-button-sm'
    break
  default:
    additionalClass.value = 'h-button'
    break
}
</script>
<template>
  <button
    class="w-full h-button rounded-custom-button bg-neutral-2 text-gray-500 hover:brightness-95 transition-all duration-100"
    :class="additionalClass"
    type="submit"
  >
    <slot name="icon"></slot>
    <span class="leading-none">{{ text }}</span>
  </button>
</template>
