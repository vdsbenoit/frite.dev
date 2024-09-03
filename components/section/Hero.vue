<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="-mt-16 sm:mt-0">
      <div id="background-clip" ref="backgroundClip"></div>
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
          with tailored software solutions
        </span>
      </h1>
      <div
        class="mt-8 grid grid-cols-1 justify-items-center gap-2 font-semibold *:rounded-lg *:px-10 *:py-2 *:shadow-xl focus:*:outline-none focus:*:ring-2 focus:*:ring-red-400 sm:grid-cols-2 sm:justify-normal sm:gap-4 sm:*:px-16"
      >
        <a
          href="#contact"
          class="bg-primary-400 hover:bg-primary-300 active:bg-primary-500 inline-block text-gray-800 sm:justify-self-end"
        >
          Meet me
        </a>
        <a
          href="#services"
          class="inline-block bg-gray-800 text-gray-100 hover:bg-gray-700 active:bg-gray-900 sm:justify-self-start"
        >
          Who I am
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const heroTitle = ref<HTMLInputElement | null>(null);
const backgroundClip = ref<HTMLInputElement | null>(null);

const updateClipPath = () => {
  const h1Element = heroTitle.value;
  const bgClipElement = backgroundClip.value;

  if (h1Element && bgClipElement) {
    const rect = h1Element.getBoundingClientRect();
    const clipPath = `polygon(${rect.left}px ${rect.top}px, ${rect.right}px ${rect.top}px, ${rect.right}px ${rect.bottom}px, ${rect.left}px ${rect.bottom}px)`;
    bgClipElement.style.clipPath = clipPath;
  }
};
onMounted(() => {
  updateClipPath();
  window.addEventListener("resize", updateClipPath);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateClipPath);
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
