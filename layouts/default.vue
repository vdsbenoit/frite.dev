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
            animation: `animateStar ${layer.speed}s linear infinite`,
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
    <div>
      <nav>
        This is a navbar
        <button class="border border-white" @click="showStars = !showStars">
          Toggle stars
        </button>
      </nav>
      <main ref="scrollableContent" class="h-lvh overflow-y-auto">
        <slot />
      </main>
    </div>
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
