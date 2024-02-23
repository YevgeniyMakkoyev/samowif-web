<script setup lang="ts">
import NavigationComponent from "@/components/layout/NavigationComponent.vue";
import NavigationComponentV2 from "@/components/layout/NavigationComponentV2.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <!-- <NavigationComponent /> -->

    <NavigationComponentV2 />

    <main class="grow flex flex-col">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Proto Mono Light';
  font-display: optional;
  src: url('/public/fonts/Proto Mono Light.ttf') format('ttf');
}

body {
  @apply antialiased font-sans text-gray-200 bg-gray-900;
  font-family: "Proto Mono Light", monospace;
  /* font-size: 1rem; */
  box-shadow: inset 50px 50px 150px 250px rgba(0,0,0,.2);
}

html {
  scroll-behavior: smooth;
}
</style>
