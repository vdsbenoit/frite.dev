<!-- This layout contains the animated stars background and the ellipse gradient background -->
<template>
  <div>
    <div
      id="background-ellipse"
      class="fixed inset-0 -z-50 h-lvh w-lvw bg-cover"
    ></div>
    <div
      id="background-stars"
      v-for="(layer, indexLayer) in stars"
      :key="indexLayer"
      :class="{ blur: isBackgroundBlurred }"
      class="fixed inset-0 -z-40 h-lvh w-lvw overflow-hidden transition duration-1000"
    >
      <div
        v-for="(offset, indexOffset) in [0, bgStarHeight]"
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
            alt="frite"
            :class="`h-${layer.height}`"
          />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
import {
  useEventListener,
  usePreferredReducedMotion,
  useWindowSize,
} from "@vueuse/core";

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

// Constants

const RESET_THRESHOLD_X = 0.1;
const RESET_THRESHOLD_Y = 0.2;

// Composables

const appConfig = useAppConfig();
const { width: windowWidth, height: windowHeight } = useWindowSize();

// Reactive variables

const bgStarWidth = ref(0);
const bgStarHeight = ref(0);
const preferredMotion = usePreferredReducedMotion();
const isBackgroundBlurred = ref(false);
const stars = ref<StarLayer[]>([]);
const showStars = useState("showStars", () => false);

// Computed variables

const prefersReducedMotion = computed(() => {
  return preferredMotion.value === "reduce";
});

const starTransformTo = computed(() => {
  return `translateY(-${bgStarHeight.value}px)`;
});

const nbStars = computed(() => {
  return (
    ((bgStarHeight.value * bgStarWidth.value) / 40000) * appConfig.starDensity
  );
});

// Methods

const generateStars = (n: number): Star[] => {
  const stars: Star[] = [];

  for (let i = 0; i < n; i++) {
    const star: Star = {
      top: Math.floor(Math.random() * bgStarHeight.value),
      left: Math.floor(Math.random() * bgStarWidth.value),
    };

    stars.push(star);
  }
  return stars;
};

const setStars = () => {
  bgStarWidth.value = windowWidth.value;
  bgStarHeight.value = windowHeight.value;
  stars.value = [
    { stars: generateStars(nbStars.value * 6), speed: 60, height: 2 },
    { stars: generateStars(nbStars.value * 2), speed: 100, height: 3 },
    { stars: generateStars(nbStars.value), speed: 150, height: 6 },
  ];
};

const resetStars = () => {
  if (
    Math.abs(windowWidth.value - bgStarWidth.value) >
      bgStarWidth.value * RESET_THRESHOLD_X ||
    Math.abs(windowHeight.value - bgStarHeight.value) >
      bgStarHeight.value * RESET_THRESHOLD_Y
  )
    setStars();
};

const blurBackground = () => {
  isBackgroundBlurred.value = window.scrollY > window.innerHeight / 4;
};

// Lifecycle hooks

onMounted(() => {
  setStars();
  setTimeout(() => {
    showStars.value = true;
  }, 10);
  useEventListener(window, "resize", resetStars);

  blurBackground();
  useEventListener(window, "scroll", blurBackground);
});
</script>
<style>
#background-ellipse {
  /* this is equivalent to Tailwind's neutral-800 & neutral-950 */
  background: radial-gradient(ellipse at bottom, #262626 0%, #0a0a0a 100%);
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
