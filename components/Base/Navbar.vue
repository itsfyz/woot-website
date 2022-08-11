<template>
  <header class="sticky w-full top-0 z-50" v-auto-animate>
    <navbar-announcement-banner v-if="banner" @dismiss="banner = false" />
    <nav
      class="bg-white backdrop-blur firefox:bg-opacity-100 transition-all duration-700"
      :class="hasScrolled ? 'bg-opacity-75 border-b' : 'bg-opacity-0'"
    >
      <div class="mx-auto max-w-7xl px-6 sm:px-0">
        <div
          class="relative lg:static z-50 flex justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-0"
        >
          <div class="flex items-center md:gap-x-12">
            <nuxt-link to="/" aria-label="Home">
              <base-logo role="img" class="h-8 w-auto" />
            </nuxt-link>
            <div class="hidden md:flex items-center md:gap-x-6">
              <navbar-features-dropdown />
              <nuxt-link to="/" class="navbar-link">
                <span> Pricing </span>
              </nuxt-link>
              <nuxt-link to="/help-center" class="navbar-link">
                <span> Help Center </span>
              </nuxt-link>
              <navbar-resources-dropdown />
            </div>
          </div>
          <div class="flex items-center gap-x-5 md:gap-x-8">
            <div class="hidden md:block">
              <nuxt-link to="/" class="navbar-link"> Sign in </nuxt-link>
            </div>
            <nuxt-link to="/" class="group navbar-register-link">
              Create a Free account
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll();
const hasScrolled = computed(() => {
  return y.value > 100 ? true : false;
});
const banner = ref(true);
</script>

<style scoped>
.navbar-link {
  @apply inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 focus:bg-slate-100 hover:text-slate-900 focus:text-slate-900 focus:outline-none;
}
.navbar-register-link {
  @apply inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-woot-dark text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600;
}
</style>
