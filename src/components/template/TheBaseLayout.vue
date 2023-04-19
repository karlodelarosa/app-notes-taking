<template>
  <div class="grid grid-cols-1 gap-[50px] lg:grid-cols-12">
    <div class="col-span-3">
      <slot name="sidebar"></slot>
    </div>
    <div class="col-span-9">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {

}
</script>