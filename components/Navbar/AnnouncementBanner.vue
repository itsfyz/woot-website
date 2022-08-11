<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-woot">
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-1.5 rounded-lg bg-woot-dark">
            <base-icon
              name="fluent:megaphone-loud-24-regular"
              class="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden"> We announced a new product! </span>
            <span class="hidden md:inline">
              Big news! We're excited to announce a brand new product.
            </span>
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <a
            href="#"
            class="flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-woot-dark bg-white hover:bg-sky-100"
          >
            Learn more
          </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            @click="$emit('dismiss')"
            class="-mr-1 flex p-1.5 rounded-md hover:bg-woot focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <span class="sr-only">Dismiss</span>
            <base-icon
              name="fluent:dismiss-24-filled"
              class="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
