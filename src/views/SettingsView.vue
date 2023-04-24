<script setup lang="ts">
import TheContainer from '@/components/template/TheContainer.vue'
import SettingSidebarMenu from '@/components/molecules/menu/SettingSidebarMenu.vue'
import InputField from '@/components/atom/input/InputField.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
</script>

<template>
  <TheContainer page-name="Settings">
    <div class="flex pt-[50px]">
      <div class="flex-none w-[250px] border-r border-gray-300 py-[10px]">
        <SettingSidebarMenu />
      </div>
      <div class="flex-1 pl-[50px]">
        <form>
          <div class="flex flex-col gap-3 w-72 mb-5">
            <label class="font-bold">Application Name</label>
            <InputField placeholder="Application name" />
          </div>
          <ButtonPrimary :text="'Save changes'" :btn-size="'xxxx'" class="w-40" />
        </form>
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
