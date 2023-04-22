<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import CreateNoteModal from '@/components/organism/modal/CreateNoteModal.vue'

const store = useStore()
const isOpen = computed(() => store.getters['modal/GET_isOpen'])
</script>
<template>
  <div v-if="isOpen" class="modal-wrapper">
    <KeepAlive>
      <component :is="CreateNoteModal"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>
.modal-wrapper {
  @apply fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-[2px] z-[60] flex items-center justify-center;
}
</style>