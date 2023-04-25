<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputField from '@/components/atom/input/InputField.vue'
import UserAuthentication from '@/core/application/auth/UserAuthentication'
import CheckIcon from '@/components/atom/svg/CheckIcon.vue'

const router = useRouter()

const username = ref('')
const password = ref('')
const isSuccess = ref(false)
const hasError = ref(false)
const message = ref('')

const auth = new UserAuthentication()

const signIn = () => {
  const result = auth.setName(username.value).setPassword(password.value).auth()

  result.then((data) => {
    if (data.success) {
      isSuccess.value = true
      hasError.value = false

      sessionStorage.setItem('auth', JSON.stringify(data.data[0]))
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } else {
      hasError.value = true
    }
    message.value = data.message
  })
}
</script>

<template>
  <form @submit.prevent="signIn()" class="py-[30px] flex flex-col gap-3">
    <div
      v-if="hasError"
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 border-2 border-red-800"
      role="alert"
    >
      {{ message }}
    </div>
    <div
      v-if="isSuccess"
      class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 flex flex-row gap-2"
      role="alert"
    >
      <CheckIcon />
      {{ message }} Redirecting ...
    </div>
    <InputField
      id="username"
      inputName="username"
      placeholder="Input name"
      type="text"
      :required="true"
      v-model="username"
      :disabled="isSuccess"
      for-sign-in
    />
    <InputField
      id="password"
      inputName="password"
      placeholder="Input password"
      type="password"
      :required="true"
      v-model="password"
      :disabled="isSuccess"
      for-sign-in
    />

    <div class="py-[10px]">
      <button
        :disabled="isSuccess"
        class="w-full h-button rounded-custom-button bg-white font-bold"
        type="submit"
      >
        Sign In
      </button>
    </div>
  </form>
</template>
