<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    @input="updateValue($event)"
    class="w-full h-input px-[15px] placeholder:text-indigo-300 text-white rounded-custom-input bg-accent-1"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const updateInput = 'update:modelValue'

export default defineComponent({
  props: {
    id: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    required: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [updateInput],
  setup(props: any, { emit }: any) {
    const updateValue = (event: any) => {
      const target = event.target as HTMLInputElement
      emit(updateInput, target.value)
    }

    return {
      updateValue
    }
  }
})
</script>
