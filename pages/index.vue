<template>
  <main class="min-h-screen">
    <home-hero />
    <home-clients />
    <div class="h-32 bg-red-100 mb-8" v-for="n in 100" :key="n">
      {{ n }}
    </div>
  </main>
</template>
