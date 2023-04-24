<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    @input="updateValue($event)"
    class="w-full h-input px-[15px] placeholder:text-indigo-300 rounded-custom-input border border-gray-300 outline-none"
    :class="additionalClass"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    },
    forSignIn: {
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
    const additionalClass = ref('')

    if (props.forSignIn) {
      additionalClass.value = 'bg-accent-1 text-white'
    }

    return {
      updateValue,
      additionalClass
    }
  }
})
</script>
