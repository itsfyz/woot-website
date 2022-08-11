<template>
  <div class="">
    <Popover v-slot="{ open }">
      <PopoverButton
        class="rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 focus:bg-slate-100 hover:text-slate-900 focus:text-slate-900 focus:outline-none flex items-center space-x-1"
      >
        <span>Resources</span>
        <base-icon
          name="fluent:chevron-down-24-filled"
          :class="open ? '' : 'text-opacity-70'"
          class="h-4 w-4 transition duration-150 ease-in-out group-hover:text-opacity-80"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute left-0 z-10 mt-6 w-full transform px-4 sm:px-0"
        >
          <div
            class="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
          >
            <div class="bg-slate-50 absolute w-1/2 h-full right-0"></div>
            <div class="mx-auto max-w-7xl px-0 sm:px-6 z-20 relative">
              <div class="grid grid-cols-4 gap-12">
                <div class="py-6">
                  <p class="text-sm text-woot">Resources</p>
                  <ul class="mt-4 space-y-4">
                    <li v-for="(resource, i) in resourcesColumn1" :key="i">
                      <nuxt-link
                        to="/"
                        class="p-1 block rounded transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-woot focus-visible:ring-opacity-50"
                      >
                        <div class="relative">
                          <dt>
                            <base-icon
                              :name="resource.icon"
                              class="absolute h-5 w-5 text-woot"
                              aria-hidden="true"
                            />
                            <p class="ml-9 leading-6 font-medium text-gray-900">
                              {{ resource.name }}
                            </p>
                          </dt>
                          <dd class="mt-2 ml-9 text-sm text-gray-500">
                            {{ resource.description }}
                          </dd>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="py-6">
                  <p class="text-sm text-woot">Other</p>
                  <ul class="mt-4 space-y-4">
                    <li v-for="(resource, i) in resourcesColumn2" :key="i">
                      <nuxt-link
                        to="/"
                        class="p-1 block rounded transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-woot focus-visible:ring-opacity-50"
                      >
                        <div class="relative">
                          <dt>
                            <base-icon
                              :name="resource.icon"
                              class="absolute h-5 w-5 text-woot"
                              aria-hidden="true"
                            />
                            <p class="ml-9 leading-6 font-medium text-gray-900">
                              {{ resource.name }}
                            </p>
                          </dt>
                          <dd class="mt-2 ml-9 text-sm text-gray-500">
                            {{ resource.description }}
                          </dd>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="col-span-2 bg-slate-50">
                  <div class="p-6">
                    <p class="text-sm text-woot">Video tutorials lorem ipsum</p>
                    <div class="mt-4 space-y-8">
                      <div class="grid grid-cols-3 gap-4">
                        <img
                          src="https://www.chatwoot.com/images/pages/community-calls/chatwoot-connect-social.png"
                          alt="YT Video"
                          class="h-full w-full rounded-lg object-cover border"
                        />
                        <div class="col-span-2">
                          <p class="font-medium text-slate-700">
                            Chatwoot Connect 1.0
                          </p>
                          <p class="text-sm text-slate-500 mt-1">
                            The creators of Chatwoot are coming together to
                            discuss their journey of turning an open-source
                            project into a YC startup.
                          </p>
                          <div class="flex-space-x-2 text-woot text-sm mt-2">
                            <base-icon
                              name="fluent:play-circle-24-regular"
                              class="h-5 w-5"
                            />
                            <span>Watch video</span>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-3 gap-4">
                        <img
                          src="https://i.ibb.co/MDvtQxZ/maxresdefault.jpg"
                          alt="YT Video"
                          class="h-full w-full rounded-lg object-cover border"
                        />
                        <div class="col-span-2">
                          <p class="font-medium text-slate-700">
                            Chatwoot cwctl - command line tool
                          </p>
                          <p class="text-sm text-slate-500 mt-1">
                            Install and manage Chatwoot in Linux Installations
                            using the new cwctl command line tool.
                          </p>
                          <div class="flex-space-x-2 text-woot text-sm mt-2">
                            <base-icon
                              name="fluent:play-circle-24-regular"
                              class="h-5 w-5"
                            />
                            <span>Watch video</span>
                          </div>
                        </div>
                      </div>
                      <p class="text-woot">All Videos &rarr;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const resourcesColumn1 = [
  {
    name: "Blog",
    description: "The Latest industry news and insights.",
    icon: "fluent:document-24-regular",
    link: "/",
  },
  {
    name: "Customer Stories",
    description: "Read how our customers are thriving with Chatwoot",
    icon: "fluent:star-emphasis-24-regular",
    link: "/",
  },
  {
    name: "Video Tutorials",
    description: "Get up and running with Chatwoots features and techniques",
    icon: "fluent:play-circle-24-regular",
    link: "/",
  },
  {
    name: "Community",
    description: "Join our global community of Chatwoot users",
    icon: "fluent:people-community-24-regular",
    link: "/",
  },
];

const resourcesColumn2 = [
  {
    name: "Changelog",
    description:
      "Stay up to date with all of the latest additions and improvements we've made",
    icon: "fluent:notepad-24-regular",
    link: "/",
  },
  {
    name: "FAQ",
    description: "Frequently asked questions about Chatwoot",
    icon: "fluent:question-circle-24-regular",
    link: "/",
  },
  {
    name: "Status",
    description:
      "Chatwoot's real-time and historical data on system performance.",
    icon: "fluent:heart-pulse-24-regular",
    link: "/",
  },
  {
    name: "Github",
    description: "We're opensource, come check us out on Github",
    icon: "mdi:github",
    link: "/",
  },
];
</script>
