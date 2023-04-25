<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import CreateNoteModal from '@/components/organism/modal/CreateNoteModal.vue'
import DeleteNoteModal from '@/components/organism/modal/DeleteNoteModal.vue'

const store = useStore()
const isOpen = computed(() => store.getters['modal/GET_isOpen'])
const activeModal = computed(() => store.getters['modal/GET_activeModal'])
</script>
<template>
  <div v-show="isOpen" class="modal-wrapper">
    <KeepAlive>
      <CreateNoteModal v-if="activeModal === 'create'" />
    </KeepAlive>

    <KeepAlive>
      <DeleteNoteModal v-if="activeModal === 'delete'" />
    </KeepAlive>
  </div>
</template>

<style scoped>
.modal-wrapper {
  @apply fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-[2px] z-[60] flex items-center justify-center;
}
</style>
