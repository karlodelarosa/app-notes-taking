<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputField from '@/components/atom/input/InputField.vue'

const router = useRouter()

const username = ref('')
const password = ref('')

const signIn = () => {
  router.push('/')
}
</script>

<template>
  <form @submit.prevent="signIn()" class="py-[30px] flex flex-col gap-3">
    <InputField
      id="username"
      inputName="username"
      placeholder="Input any username"
      type="text"
      :required="true"
      v-model="username"
    />
    <InputField
      id="password"
      inputName="password"
      placeholder="Input any password"
      type="password"
      :required="true"
      v-model="password"
    />

    <div class="py-[10px]">
      <button class="w-full h-button rounded-custom-button bg-white font-bold" type="submit">
        Sign In
      </button>
    </div>
  </form>
</template>
