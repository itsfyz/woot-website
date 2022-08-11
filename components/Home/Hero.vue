<template>
  <section class="min-h-screen">
    <home-stripes />
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 text-center lg:pt-24 relative space-y-6"
    >
      <home-whats-new-label
        label="Read about the latest 2.7 release"
        link="/"
      />
      <h1
        class="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-700 sm:text-6xl"
      >
        Delightful customer relationships,
        <span class="relative whitespace-nowrap text-woot-dark">
          <span> at scale</span>
        </span>
      </h1>
      <p class="mx-auto max-w-2xl text-lg tracking-wide text-slate-500">
        Chatwoot gives you all the tools to manage conversations, build
        relationships and delight your customers from one place.
      </p>
      <home-dashboard-preview class="max-w-4xl mx-auto w-full" />
    </div>
  </section>
</template>
<script setup></script>
<style scoped></style>
