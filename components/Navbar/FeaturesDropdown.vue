<template>
  <div class="">
    <Popover v-slot="{ open }">
      <PopoverButton
        class="rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 focus:bg-slate-100 hover:text-slate-900 focus:text-slate-900 focus:outline-none flex items-center space-x-1"
      >
        <span>Features</span>
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
          v-slot="{ close }"
        >
          <div
            class="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
          >
            <div class="mx-auto max-w-7xl z-20 relative">
              <div class="py-6">
                <div class="grid grid-cols-4 gap-4">
                  <div class="space-y-2 pr-8 border-r">
                    <button
                      v-for="(feature, i) in featureBlocks"
                      :key="i"
                      @click="selected = i"
                      class="text-left flex items-start rounded-lg p-2 transition duration-200 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-woot focus-visible:ring-opacity-50"
                      :class="selected === i ? 'bg-gray-50' : 'grayscale'"
                    >
                      <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                      >
                        <img
                          :src="feature.icon"
                          alt="Product"
                          class="h-12 w-12"
                        />
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">
                          {{ feature.name }}
                        </p>
                        <p class="text-sm text-gray-500">
                          {{ feature.description }}
                        </p>
                      </div>
                    </button>
                  </div>
                  <div class="col-span-3">
                    <div class="grid grid-cols-3 gap-6" v-auto-animate>
                      <nuxt-link
                        v-for="option in featureBlocks[selected].options"
                        :key="option.name"
                        to="/"
                        class="relative hover:bg-slate-50 p-1 rounded-lg flex flex-col"
                        @click.native="close()"
                      >
                        <div class="flex-grow">
                          <dt>
                            <base-icon
                              :name="option.icon"
                              class="absolute h-6 w-6 text-woot"
                              aria-hidden="true"
                            />
                            <p
                              class="ml-9 text-base leading-6 font-medium text-gray-800"
                            >
                              {{ option.name }}
                            </p>
                          </dt>
                          <dd class="mt-2 ml-9 text-sm text-gray-500">
                            <p>
                              {{ option.description }}
                            </p>
                          </dd>
                        </div>
                        <p class="ml-9 text-xs text-gray-400 mt-4">
                          Learn More &rarr;
                        </p>
                      </nuxt-link>
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
import { ref } from "vue";

const selected = ref(0);

const featureBlocks = [
  {
    name: "Product",
    description: "Learn about Chatwoots core features",
    icon: "/product.svg",
    link: "/",
    options: [
      {
        name: "Website Live Chat",
        description: "Chat with your customers live",
        icon: "fluent:chat-multiple-24-regular",
      },
      {
        name: "Private Notes",
        description: "Add private notes for yourself",
        icon: "fluent:note-24-regular",
      },
      {
        name: "Dashboard Apps",
        description: "Embed external websites inside chatwoot",
        icon: "fluent:apps-add-in-24-regular",
      },
      {
        name: "Live View",
        description: "Get a live view of your customers",
        icon: "fluent:live-24-regular",
      },
      {
        name: "Business Hours",
        description: "Set business hours for your agents",
        icon: "fluent:clock-toolbox-24-regular",
      },
      {
        name: "Auto-responder",
        description: "Auto respond when you are not available",
        icon: "fluent:arrow-reply-all-24-regular",
      },
      {
        name: "Custom Attributes",
        description: "Add custom attributes to your chats and contacts",
        icon: "fluent:layer-24-regular",
      },
      {
        name: "Pre-Chat Form",
        description:
          "Add a customisable chat form before a user initiates a chat.",
        icon: "fluent:form-24-regular",
      },
    ],
  },
  {
    name: "Manage",
    description: "Manage your workflow with ease",
    icon: "/manage.svg",

    link: "/",
    options: [
      {
        name: "Mentions",
        description: "Mention your teams/agents and notify them in a chat.",
        icon: "fluent:mention-24-regular",
      },
      {
        name: "Labels",
        description: "Add labels to chats and keep it organized",
        icon: "fluent:tag-multiple-24-regular",
      },
      {
        name: "Auto Assignment",
        description: "Assign agents automatically",
        icon: "fluent:person-available-24-regular",
      },
      {
        name: "Teams",
        description: "Create internal teams",
        icon: "fluent:people-community-24-regular",
      },
      {
        name: "Contact Notes",
        description: "Add notes to contacts",
        icon: "fluent:person-note-24-regular",
      },
      {
        name: "Agent Capacity",
        description: "Assign agents within capacity",
        icon: "fluent:person-board-24-regular",
      },
    ],
  },
  {
    name: "Analyse",
    description: "Analyse and monitor your data",
    icon: "/analyse.svg",

    link: "/",
    options: [
      {
        name: "Custom views",
        description: "Generate custom views for your data",
        icon: "fluent:content-view-24-regular",
      },
      {
        name: "Custom Filters",
        description: "Filter your data with advanced filters",
        icon: "fluent:filter-24-regular",
      },
      {
        name: "Conversation Reports",
        description: "Get details insights on your conversations",
        icon: "fluent:chat-multiple-24-regular",
      },
      {
        name: "Agent Reports",
        description: "Reports on your agents",
        icon: "fluent:person-info-20-regular",
      },
      {
        name: "Inbox reports",
        description: "Details on your inboxes",
        icon: "fluent:mail-inbox-all-24-regular",
      },
      {
        name: "Label Reports",
        description: "Get information on your labels",
        icon: "fluent:tag-multiple-24-regular",
      },
      {
        name: "Team Reports",
        description: "Analyse how your team is performing",
        icon: "fluent:tag-multiple-24-regular",
      },
      {
        name: "CSAT Reports",
        description: "Get reports on how customers respond to your chat",
        icon: "fluent:emoji-smile-slight-24-regular",
      },
    ],
  },
  {
    name: "Productivity",
    description: "Become extremely productive",
    icon: "/productivity.svg",
    link: "/",
    options: [
      {
        name: "Keyboard Shortcuts",
        description: "Master Chatwoot with keyboard shortcuts",
        icon: "fluent:keyboard-24-regular",
      },
      {
        name: "Command bar",
        description: "Use the command bar to perform actions",
        icon: "fluent:key-command-24-regular",
      },
      {
        name: "Canned Responses",
        description: "Create canned responses for your agents",
        icon: "fluent:comment-lightning-24-regular",
      },
      {
        name: "Automations",
        description: "Automate everything with Chatwoot",
        icon: "fluent:plug-disconnected-24-regular",
      },
      {
        name: "Bulk Actions",
        description: "Perform actions in bulk",
        icon: "fluent:multiselect-20-filled",
      },
    ],
  },
  {
    name: "Integrations",
    description: "Connect with other services natively",
    icon: "/integrations.svg",
    link: "/",
    options: [
      {
        name: "Whatsapp",
        description: "Converse on whatsapp",
        icon: "logos:whatsapp-icon",
      },
      {
        name: "Facebook",
        description: "Connect with Facebook",
        icon: "logos:facebook",
      },
      {
        name: "Messenger",
        description: "Connect with Facebook Messenger",
        icon: "ph:messenger-logo-duotone",
      },
      {
        name: "Instagram",
        description: "Connect with Instagram",
        icon: "ph:instagram-logo-duotone",
      },
      {
        name: "Twitter",
        description: "Connect with Twitter",
        icon: "logos:twitter",
      },
      {
        name: "Slack",
        description: "Connect with Slack",
        icon: "logos:slack-icon",
      },
      {
        name: "Dialogflow",
        description: "Connect with Dialogflow",
        icon: "logos:dialogflow",
      },
    ],
  },
];
</script>
