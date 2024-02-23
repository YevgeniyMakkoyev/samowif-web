<template>
    <div :class="{'flex flex-col xl:flex-row': props.showHero}" class="p-4">
        <div v-if="props.showHero" class="flex-1 flex flex-col justify-center space-y-8 relative">
            <div class="relative text-purple-200 font-bold flex-col" data-v-c1c11d52="">
                <span class="uppercase font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl">{{ props.heroTitle }}</span>
                <br>
                <span class="text-teal-300 uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">{{ props.heroSubtitle }}</span>
            </div>

            <div v-html="props.heroMessage"></div>
        </div>

        <div class="flex flex-col items-center relative mt-16">
            <div
                class="absolute gradient -z-10 -right-50 w-[250px] h-[250px] md:w-[500px] md:h-[500px] xl:w-[1000px] xl:h-[1000px]">
            </div>
            <div class="absolute gradient -z-10 -left-50"></div>

            <QuestionMarkCircleIcon v-if="props.questionMarkIcon"
                class="w-[124px] h-[124px] md:w-[256px] md:h-[256px] xl:w-[512px] xl:h-[512px] absolute text-black" />

            <img class="opacity-30 w-[124px] h-[124px] md:w-[256px] md:h-[256px] xl:w-[512px] xl:h-[512px] ring-4 ring-cyan-500/70 custom-border-radius bb"
                src="/samowif-collection.gif">
            <div class="flex justify-center mt-8" v-if="buttonText">
                <button
                    class="uppercase middle items-center flex none center bg-cyan-500/50 rounded-full py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-not-allowed">Mint
                    {{ buttonText }}</button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    /**
     * 
     */
    buttonText: String,
    buttonCallback: Function,
    /**
     * 
     */
    showHero: Boolean,
    heroTitle: String,
    heroSubtitle: String,
    heroMessage: String,
    /**
     * 
     */
    questionMarkIcon: Boolean,
});

</script>

<style>
.custom-border-radius {
    border-radius: 31% 69% 23% 77% / 66% 18% 82% 34%;
    animation: border-radius-animation 5s infinite linear;
}

@keyframes border-radius-animation {

    0%,
    100% {
        border-radius: 31% 69% 23% 77% / 66% 18% 82% 34%;
    }

    10% {
        border-radius: 35% 65% 27% 73% / 62% 22% 78% 38%;
    }

    20% {
        border-radius: 39% 61% 31% 69% / 58% 26% 74% 42%;
    }

    30% {
        border-radius: 43% 57% 35% 65% / 54% 30% 70% 46%;
    }

    40% {
        border-radius: 47% 53% 39% 61% / 50% 34% 66% 50%;
    }

    50% {
        border-radius: 51% 49% 43% 57% / 46% 38% 62% 54%;
    }

    60% {
        border-radius: 47% 53% 39% 61% / 50% 34% 66% 50%;
    }

    70% {
        border-radius: 43% 57% 35% 65% / 54% 30% 70% 46%;
    }

    80% {
        border-radius: 39% 61% 31% 69% / 58% 26% 74% 42%;
    }

    90% {
        border-radius: 35% 65% 27% 73% / 62% 22% 78% 38%;
    }
}

/* * {
    transition: all 0.25s ease-out;
} */

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.gradient {
    --size: 250px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(rgba(55, 235, 169, 0.85), #5b37eb);
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    animation: border-radius-pulse 8s infinite, rotate var(--speed) var(--easing) alternate infinite;
}

@keyframes border-radius-pulse {

    0%,
    100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }

    25% {
        border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
    }

    50% {
        border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }

    75% {
        border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
    }
}


@media (min-width: 720px) {
    .gradient {
        --size: 500px;
    }
}</style>