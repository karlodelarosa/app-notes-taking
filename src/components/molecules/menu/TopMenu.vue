<script setup lang="ts">
import BrandLogo from '@/components/atom/svg/BrandLogo.vue'
import LinkBasic from '@/components/atom/link/LinkBasic.vue'

const logout = () => {
  sessionStorage.removeItem('auth')
}
</script>

<template>
  <nav class="top-menu">
    <BrandLogo class="w-[180px] pl-5" />
    <LinkBasic @click="logout" text="Logout" page="sign_in" />
  </nav>
</template>
