<template>
    <!-- <footer>
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 flex flex-col md:flex-row md:justify-between">
        <div class="space-y-8 flex flex-col">
          <div class="flex space-x-4 items-center">
            <img class="h-7" src="/official-logo.png" alt="Company name" />
            <p class="text-sm leading-6 text-gray-300">Making the world a better place...</p>
          </div>
          <div class="flex space-x-6 justify-center">
            <a v-for="item in navigation.social" :key="item.name" target="_blank" :href="item.href" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">{{ item.name }}</span>
  
              <i :class="`${item.icon} transition text-xl text-gray-400 hover:text-gray-300 duration-300 h-6 w-6`"></i>
            </a>
          </div>
        </div>
        <div class="md:text-center mt-6 md:mt-0">
          <p class="text-xs leading-5 text-white">&copy; 2024 Samo wif Hat, All rights reserved.</p>
        </div>
      </div>
    </footer> -->

    <footer class="">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a v-for="item in navigation.social" :key="item.name" :href="item.href" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <i :class="`${item.icon} transition text-xl text-gray-400 hover:text-gray-300 duration-300 h-6 w-6`"></i>
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2024 SamoWif.</p>
    </div>
  </footer>

  </template>
  
<script setup lang="ts">
import { defineComponent, h } from 'vue'

const navigation = {
    main: [
    { name: '', href: '#' },
  ],
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/ERMnwupDq4',
      icon: 'fa-brands fa-discord'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/samowif',
      icon: 'fa-brands fa-telegram'
    },
    {
      name: 'X',
      href: 'https://twitter.com/samowifahat',
      icon: 'fa-brands fa-twitter'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/uzitgc/samowif-web',
      icon: 'fa-brands fa-github'
    },
  ],
}
</script>