<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <img
        class="mx-auto h-10 w-10"
        src="~/assets/img/frites.png"
        alt="frite-logo"
      />
      <p class="text-primary font-bold">frite.dev</p>
      <div id="background-clip" ref="backgroundClip"></div>
      <h1 ref="heroTitle" class="relative mt-3 px-2 text-5xl font-light">
        <span
          class="block bg-gradient-to-t from-gray-400 to-white bg-clip-text leading-normal text-transparent"
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
        class="mt-6 grid grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2"
      >
        <a
          href="#contact"
          class="bg-primary inline-block justify-self-end rounded-lg px-6 py-3 font-semibold text-gray-800 shadow-lg"
        >
          Meet me
        </a>
        <a
          href="#services"
          class="inline-block justify-self-start rounded-lg bg-gray-800 px-6 py-3 font-semibold text-gray-100 shadow-lg"
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
