<template>
  <div class="max-w-7xl mx-auto flex flex-col justify-center grow items-center">
    <div>
      <MintCard :show-hero="true" :hero-title="mintCard.title" :hero-subtitle="mintCard.subtitle" :hero-message="mintCard.message" />
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import MintCard from '@/components/MintCard.vue';
import { ref } from 'vue';


const mintCard = ref({
  title: `MINT YOUR SAMO`,
  subtitle: `Rules made simple`,
  message: `
  <div class="space-y-2">
    <div>
      <h1 class="text-2xl uppercase text-teal-400">Snapshot - Feb 22, 00:00</h1> 
      <p>Dedicated to early supporters of SAMOWIF. All elegible members who recieves the Minting Pass as soul-bounded token, that will be used in exchange granting you a free mint. The requirment is to hold at least 0.5% SAMOWIF</p> 
    </div>
    <div class="space-y-2">
      <h1 class="text-2xl uppercase text-teal-400">Minting</h1> 
      <div>
        <h1 class="text-2xl uppercase text-teal-500/70">Early supporters claim - Mar 1, 15:00|Mar 2, 15:00  UTC</h1> 
        <p>All early supporters will be able to claim their free NFT during this timeframe in exchange for one minting pass.</p> 
      </div>
      <div>
        <h1 class="text-2xl uppercase text-teal-500/70">Public Sale - Mar 2, 15:00|Mar 3, 15:00  UTC</h1> 
        <p>Use SOL to mint your exclusive NFT</p> 
      </div>
    </div>
  </div>
  `,
});
</script>