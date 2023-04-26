<script setup lang="ts">
import { computed, watch, shallowRef } from 'vue'
import { useStore } from 'vuex'
import TheContainer from '@/components/template/TheContainer.vue'
import SettingSidebarMenu from '@/components/molecules/menu/SettingSidebarMenu.vue'
import SettingsGeneralForm from '@/components/molecules/form/SettingsGeneralForm.vue'
import SettingsAccountForm from '@/components/molecules/form/SettingsAccountForm.vue'
import SettingsAddLabelForm from '@/components/molecules/form/SettingsAddLabelForm.vue'

const store = useStore()
const selectedTabId = computed(() => store.getters['settings/GET_selectedMenuID'])

const tabs = [SettingsGeneralForm, SettingsAccountForm, SettingsAddLabelForm]
const currentTab = shallowRef()

watch(selectedTabId, (newVal) => {
  currentTab.value = tabs[newVal]
}, { immediate: true })

</script>

<template>
  <TheContainer page-name="Settings">
    <div class="flex pt-[50px]">
      <div class="flex-none w-[250px] border-r border-gray-300 py-[10px]">
        <SettingSidebarMenu />
      </div>
      <div class="flex-1 pl-[50px]">
        
        <component :is="currentTab"></component>
      </div>
    </div>
  </TheContainer>
</template>

<style scoped>
.filter-section {
  @apply grid grid-cols-1 gap-5 lg:grid-cols-2 items-center justify-between mb-[30px];
}

.card-section {
  @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px];
}
</style>
