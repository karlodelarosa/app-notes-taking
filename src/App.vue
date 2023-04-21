<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheBaseLayout from './components/template/TheBaseLayout.vue'
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