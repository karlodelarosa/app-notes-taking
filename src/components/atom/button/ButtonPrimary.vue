<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  size: {
    type: String,
    default: 'default'
  },
  editMode: {
    type: Boolean,
    default: false
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
    class="w-full flex flex-row items-center bg-primary justify-center gap-2 rounded-custom-button text-white hover:brightness-95 transition-all duration-100"
    :class="additionalClass"
    type="submit"
  >
    <slot name="icon"></slot>
    <span class="leading-none">{{ text }}</span>
  </button>
</template>
