<script setup lang="ts">
import BrandLogo from '@/components/atom/svg/BrandLogo.vue'
import LinkBasic from '@/components/atom/link/LinkBasic.vue'
</script>

<template>
  <nav class="h-[75px] px-[25px] bg-white shadow-md flex flex-row items-center justify-between fixed right-0 left-0 pl-80 z-40">
    <BrandLogo class="w-[180px] pl-5" />
    <LinkBasic text="Logout" page="sign_in" />
  </nav>
</template>
