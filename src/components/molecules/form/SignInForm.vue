<script setup lang="ts">
import { ref } from 'vue'
import InputField from '@/components/atom/input/InputField.vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <form class="py-[30px] flex flex-col gap-3">
    <InputField
      id="username"
      inputName="username"
      placeholder="Username"
      type="text"
      :required="true"
      v-model="username"
    />
    <InputField
      id="password"
      inputName="password"
      placeholder="Password"
      type="password"
      :required="true"
      v-model="password"
    />

    <div class="py-[10px]">
      <button class="w-full h-button rounded-custom-button bg-white font-bold" type="submit">Sign In</button>
    </div>
  </form>
</template>