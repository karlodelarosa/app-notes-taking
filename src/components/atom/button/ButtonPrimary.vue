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
  },
  disabled: {
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
    class="btn-primary"
    :class="additionalClass"
    :disabled="disabled"
    type="submit"
  >
    <slot name="icon"></slot>
    <span class="leading-none">{{ text }}</span>
  </button>
</template>
