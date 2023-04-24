<script setup lang="ts">
import { useRouter } from 'vue-router'
import BrandLogoWhite from '@/components/atom/svg/BrandLogoWhite.vue'
import SignInForm from '@/components/molecules/form/SignInForm.vue'
import SignInTextContent from '@/components/molecules/text_group/SignInTextContent.vue'
import TopWave from '@/components/atom/svg/TopWave.vue'

const router = useRouter()
const auth = sessionStorage.getItem("auth")
if (auth !== null) {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-accent-3">
    <TopWave class="fixed top-0 left-0" />

    <div class="h-screen">
      <div class="max-w-7xl mx-auto h-full grid grid-cols-2 items-center">
        <SignInTextContent />

        <div class="sign-in w-2/3 mx-auto">
          <BrandLogoWhite class="mx-auto" />
          <SignInForm />
        </div>
      </div>
    </div>
  </div>
</template>
