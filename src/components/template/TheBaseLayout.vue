<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheModal from './TheModal.vue'
import SidebarPanel from '../organism/SidebarPanel.vue'
import TopMenu from '../molecules/menu/TopMenu.vue'

const route = useRoute()
const isSignIn = computed(() => route.name === 'sign_in')
</script>

<template>
  <div class="w-full h-screen md:flex">
    <SidebarPanel v-if="!isSignIn" />
    <div class="flex-1 bg-neutral-1 min-h-screen h-fit">
      <TopMenu v-if="!isSignIn" />
      <main>
        <slot></slot>
      </main>
    </div>

    <Transition name="fade">
      <TheModal />
    </Transition>
  </div>
</template>
