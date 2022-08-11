<template>
  <nuxt-link
    :to="link"
    class="rounded-full py-2 px-1 bg-woot/10 max-w-max text-xs mx-auto text-woot-darker focus:outline-none focus:ring-2 focus:ring-sky-500/50 block"
  >
    <span class="px-2 py-1 rounded-full mr-2 bg-woot/20 font-medium"
      >What's New</span
    >
    <span class="mr-2"> {{ label }} &rarr;</span>
  </nuxt-link>
</template>
<script setup>
const props = defineProps(["label", "link"]);
</script>
