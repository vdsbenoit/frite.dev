<template>
  <div>
    <div
      id="background"
      v-for="(layer, indexLayer) in stars"
      :key="indexLayer"
      :class="{ blur: blurBackground }"
      class="transition duration-1000"
    >
      <div
        v-for="(offset, indexOffset) in [0, windowHeight]"
        :key="indexOffset"
      >
        <div
          v-for="(star, indexStar) in layer.stars"
          :key="indexStar"
          class="pointer-events-none absolute -z-10 transition duration-300"
          :style="{
            top: star.top + offset + 'px',
            left: star.left + 'px',
            animation: prefersReducedMotion
              ? ''
              : `animateStar ${layer.speed}s linear infinite`,
          }"
          :class="{
            'opacity-0': !showStars,
            'opacity-100': showStars,
          }"
        >
          <img
            src="~/assets/img/frite.png"
            alt="fry"
            :class="`h-${layer.height}`"
          />
        </div>
      </div>
    </div>
    <nav class="relative left-0 right-0 top-0 z-10 sm:fixed sm:top-8 sm:flex">
      <div
        class="via-primary bg-gradient-to-r from-gray-700 to-red-400 pb-0.5 sm:mx-auto sm:rounded-2xl sm:bg-gradient-to-br sm:p-0.5"
      >
        <div
          class="hover:*:text-primary-300 flex items-center justify-between bg-gray-800 px-4 py-2 text-gray-100 *:transition-colors sm:space-x-4 sm:rounded-2xl sm:px-6 sm:py-1"
        >
          <div class="flex items-center sm:hidden">
            <img
              src="~/assets/img/frites.png"
              alt="frites-logo"
              class="mr-2 h-8 w-8"
            />
            <a
              href="#hero"
              class="hover:text-primary text-lg font-bold transition-colors"
              >frite.dev</a
            >
          </div>
          <a href="#profile">Profile </a>
          <a href="#skills">Skills </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
    <main ref="scrollableContent" class="h-lvh overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
// Config & imports

const appConfig = useAppConfig();

// Interfaces & Types

interface Star {
  top: number;
  left: number;
}

interface StarLayer {
  stars: Star[];
  speed: number;
  height: number;
}

// Reactive variables

const scrollableContent = ref<HTMLElement | null>(null);
const prefersReducedMotion = ref(false);
const blurBackground = ref(false);
const windowHeight = ref(0);
const windowWidth = ref(0);
const stars = ref<StarLayer[]>([]);
const showStars = ref(false);

// Computed variables

const starTransformTo = computed(() => {
  return `translateY(-${windowHeight.value}px)`;
});

const nbStars = computed(() => {
  return (
    ((windowHeight.value * windowWidth.value) / 40000) * appConfig.starDensity
  );
});

// Methods

const generateStars = (n: number): Star[] => {
  const stars: Star[] = [];

  for (let i = 0; i < n; i++) {
    const star: Star = {
      top: Math.floor(Math.random() * windowHeight.value),
      left: Math.floor(Math.random() * windowWidth.value),
    };

    stars.push(star);
  }
  return stars;
};

const resetStars = () => {
  stars.value = [
    { stars: generateStars(nbStars.value * 6), speed: 60, height: 2 },
    { stars: generateStars(nbStars.value * 2), speed: 100, height: 3 },
    { stars: generateStars(nbStars.value), speed: 150, height: 6 },
  ];
};

const updateWindowSize = () => {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  resetStars();
};

const handleScroll = () => {
  if (!scrollableContent.value) return;
  blurBackground.value =
    scrollableContent.value.scrollTop > windowHeight.value / 4;
};

// Lifecycle hooks

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.addEventListener("resize", updateWindowSize);
  updateWindowSize();
  if (scrollableContent.value) {
    scrollableContent.value.addEventListener("scroll", handleScroll);
  }
  setTimeout(() => {
    showStars.value = true;
  }, 1);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
  if (scrollableContent.value) {
    scrollableContent.value.removeEventListener("scroll", handleScroll);
  }
});
</script>
<style>
body {
  height: 100%;
  /* this is equivalent to Tailwind's neutral-800 & neutral-950 */
  background: radial-gradient(ellipse at bottom, #262626 0%, #0a0a0a 100%);
  overflow: hidden;
}

@keyframes animateStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: v-bind("starTransformTo");
  }
}
</style>
