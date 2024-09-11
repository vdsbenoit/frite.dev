<template>
  <div class="flex min-h-screen items-center justify-center">
    <div>
      <div id="background-clip" :style="{ clipPath }"></div>
      <h1
        ref="heroTitle"
        class="relative mt-3 px-0.5 text-center font-bold tracking-tight sm:px-2"
      >
        <span
          class="block bg-gradient-to-t from-gray-400 to-white bg-clip-text text-[28px] text-transparent sm:text-5xl sm:leading-normal"
        >
          Empower your business
        </span>
        <span
          class="block bg-gradient-to-t from-gray-400 to-white bg-clip-text text-lg text-transparent sm:text-3xl"
        >
          with tailored
          <span class="decoration-primary underline underline-offset-4">
            software solutions</span
          >
        </span>
      </h1>
      <div
        class="focus:*:ring-primary-200 mt-8 grid grid-cols-1 justify-items-center gap-2 font-semibold *:rounded-lg *:px-10 *:py-2 *:shadow-xl focus:*:outline-none focus:*:ring-2 sm:grid-cols-2 sm:justify-normal sm:gap-4 sm:*:px-16"
      >
        <a
          href="#contact"
          class="bg-primary-400 hover:bg-primary-300 active:bg-primary-500 inline-block text-gray-800 sm:justify-self-end"
        >
          Meet me
        </a>
        <a
          href="#profile"
          class="inline-block bg-gray-800 text-gray-100 hover:bg-gray-700 active:bg-gray-900 sm:justify-self-start"
        >
          Who I am
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElementBounding } from "@vueuse/core";

const heroTitle = ref<HTMLInputElement | null>(null);
const heroTitleRect = useElementBounding(heroTitle);

const clipPath = computed(() => {
  if (!heroTitleRect.left.value) return "";
  return `polygon(${heroTitleRect.left.value}px ${heroTitleRect.top.value}px, ${heroTitleRect.right.value}px ${heroTitleRect.top.value}px, ${heroTitleRect.right.value}px ${heroTitleRect.bottom.value}px, ${heroTitleRect.left.value}px ${heroTitleRect.bottom.value}px)`;
});
</script>

<style scoped>
#background-clip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #262626 0%, #0a0a0a 100%);
  z-index: -1;
}
</style>
