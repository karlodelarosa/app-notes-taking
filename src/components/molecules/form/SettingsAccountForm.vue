<script setup lang="ts">
import InputField from '@/components/atom/input/InputField.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
</script>

<template>
  <form class="w-72">
    <div class="flex flex-col gap-3 mb-5">
      <label class="font-bold">Password</label>
      <InputField placeholder="Enter your current password" type="password"/>
    </div>
    <div class="flex flex-col gap-3 mb-5">
      <label class="font-bold">Confirm Password</label>
      <InputField placeholder="Match your current password" type="password"/>
    </div>
    <div class="w-40">
      <ButtonPrimary :text="'Save changes'" class="w-1/2" />
    </div>
  </form>
</template>