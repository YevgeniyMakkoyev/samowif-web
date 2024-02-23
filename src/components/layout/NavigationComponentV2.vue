<template>
    <Disclosure as="nav" class="bg-gray-800 z-50" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex flex-1">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="/official-logo.png" alt="Your Company" />
            </div>
            <div class="hidden md:ml-6 md:flex md:items-center justify-center md:space-x-4 flex-1">
              <component :is="item.router ? RouterLink : 'a'" v-for="item in navigation" :key="item.title" :to="item.href" :href="item.href" :class="[item.current ? 'bg-cyan-900/30 text-cyan-300' : 'text-gray-300 hover:bg-cyan-900/30 bg-cyan-900/10', 'rounded-md px-3 py-2 text-sm font-medium uppercase']" :aria-current="item.current ? 'page' : undefined">{{ item.title }}</component>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <RouterLink to="mint" type="button" class="uppercase middle items-center flex none center bg-cyan-500/50 rounded-full py-2 px-3 font-sans text-xs font-bold text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <BoltIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Mint
              </RouterLink>
            </div>
            <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                    <WalletMultiButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <div class="flex justify-end">
            <WalletMultiButton />
        </div>
          <DisclosureButton v-for="item in navigation" :key="item.title" :as="RouterLink" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium uppercase']" :aria-current="item.current ? 'page' : undefined">{{ item.title }}</DisclosureButton>
        
          
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { BoltIcon } from '@heroicons/vue/20/solid'
import {WalletMultiButton} from "solana-wallets-vue";
import {ref} from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
  

  const navigation = ref([
    {
      title: 'Home',
      href: '/',
      router: true,
      current: true
    },
    {
      title: 'Tokenomics',
      href: '/#tokenomics-section', 
      router: false,
      current: false
    },
    {
      title: 'Roadmap',
      href: '/#tokenomics-section', 
      router: false,
      current: false
    },
  ]);

router.beforeEach((to, from, next) => {
    navigation.value = navigation.value.map(v => {
        v.current = to.path === v.href;

        return v;
    })

    next();
})

  </script>

  <style>

button.swv-button {
  background: transparent !important;
  @apply text-sm;
}

.swv-dropdown-list {
  @apply !bg-gray-600/30;
}

.swv-dropdown-list * {
  @apply text-white;
}

.swv-dropdown-list-item:hover {
  @apply !bg-gray-600/30;
}

.swv-modal-overlay {
  @apply !bg-gray-900/80;
}

.swv-modal-wrapper {
  @apply !bg-gray-800;
}

.swv-modal-wrapper * {
  @apply  !text-white;
}

.swv-modal-button-close {
  @apply !bg-gray-600/30;

}
</style>