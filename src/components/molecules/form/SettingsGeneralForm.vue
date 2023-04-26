<script setup lang="ts">
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import InputField from '@/components/atom/input/InputField.vue'
</script>

<template>
  <form class="w-72">
    <div class="flex flex-col gap-3 mb-5">
      <label class="font-bold">Application Name</label>
      <InputField placeholder="Application name" />
    </div>
    <div class="w-40">
      <ButtonPrimary :text="'Save changes'" class="w-1/2" />
    </div>
  </form>
</template>