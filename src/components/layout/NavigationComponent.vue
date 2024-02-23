<template>
  <nav class="z-50">
    <div class="flex max-w-7xl mx-auto justify-between items-center py-3 px-3 text-sm">
      <img src="/official-logo.png" class="h-8 w-8" />
      <ul class="flex space-x-2 uppercase truncate">
        <div v-for="(item, index) in navigationItems" :key="index"><RouterLink :to="item.href">{{item.title}}</RouterLink></div>
      </ul>

      <WalletMultiButton />
    </div>
  </nav>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {RouterLink} from "vue-router";
import {WalletMultiButton} from "solana-wallets-vue";

const navigationItems = ref([
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Tokenomics',
    href: '/#tokenomics-section'
  },
  {
    title: 'Roadmap',
    href: '/#tokenomics-section'
  },
  {
    title: 'Mint',
    href: '/mint'
  },
]);
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