<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <div id="background-clip" ref="backgroundClip"></div>
      <h1
        ref="heroTitle"
        class="relative mt-3 px-2 text-4xl font-light md:text-5xl"
      >
        <span
          class="block bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent md:leading-normal"
        >
          Empower your businesses
        </span>
        <span
          class="block bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent"
        >
          with tailored software solutions
        </span>
      </h1>
      <div
        class="mt-8 grid grid-cols-1 justify-items-center gap-4 sm:mt-12 sm:grid-cols-2 sm:justify-normal sm:gap-12"
      >
        <a
          href="#contact"
          class="bg-primary inline-block rounded-lg px-24 py-3 font-semibold text-gray-800 shadow-xl sm:justify-self-end sm:px-16"
        >
          Meet me
        </a>
        <a
          href="#services"
          class="inline-block rounded-lg bg-gray-800 px-24 py-3 font-semibold text-gray-100 shadow-xl sm:justify-self-start sm:px-16"
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
