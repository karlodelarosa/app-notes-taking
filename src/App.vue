<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import TheBaseLayout from './components/template/TheBaseLayout.vue'
import router from './router';

const auth = sessionStorage.getItem("auth")
if (auth === null) {
  router.push('/sign-in')
}
</script>

<template>
  <TheBaseLayout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </TheBaseLayout>
</template>
