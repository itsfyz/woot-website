import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    css: ['@/assets/css/styles.css'],
    build: {
        transpile: ['@headlessui/vue'],
    },
})
