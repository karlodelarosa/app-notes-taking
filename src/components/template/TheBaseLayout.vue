<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
    <aside class="col-span-3 ">
      <slot name="left-sidebar"></slot>
    </aside>
    <main class="col-span-7 bg-white px-[20px]">
      <slot name="content"></slot>
    </main>
    <aside class="col-span-2 bg-white">
      <slot name="right-sidebar"></slot>
    </aside>
  </div>
</template>
<script lang="ts">
export default {

}
</script>