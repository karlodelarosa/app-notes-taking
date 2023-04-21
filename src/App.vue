<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TheMenu from './components/template/TheMenu.vue'

const route = useRoute()
const isSignInPage = computed(() => route.name === 'sign_in')
</script>

<template>
  <header v-if="!isSignInPage">
    <TheMenu />
  </header>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>
