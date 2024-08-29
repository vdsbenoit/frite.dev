<template>
  <div>
    <div v-for="(layer, indexLayer) in stars" :key="indexLayer">
      <div
        v-for="(offset, indexOffset) in [0, windowHeight]"
        :key="indexOffset"
      >
        <div
          v-for="(star, indexStar) in layer.stars"
          :key="indexStar"
          class="absolute"
          :style="{
            top: star.top + offset + 'px',
            left: star.left + 'px',
            animation: `animateStar ${layer.speed}s linear infinite`,
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
    <div id="title">
      <span> THIS IS </span>
      <br />
      <span> A STAR BACKGROUND </span>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Star {
  top: number;
  left: number;
}

interface StarLayer {
  stars: Star[];
  speed: number;
  height: number;
}

const windowHeight = ref(0);
const windowWidth = ref(0);
const stars = ref<StarLayer[]>([]);

const starTransformTo = computed(() => {
  return `translateY(-${windowHeight.value}px)`;
});

const updateWindowSize = () => {
  windowHeight.value = 2000;
  windowWidth.value = window.innerWidth;
  resetStars();
};

const generateStars = (n: number): Star[] => {
  const stars: Star[] = [];

  for (let i = 0; i < 100; i++) {
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
    { stars: generateStars(700), speed: 75, height: 2 },
    { stars: generateStars(200), speed: 100, height: 3 },
    { stars: generateStars(100), speed: 150, height: 5 },
  ];
};

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
  updateWindowSize();
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
</script>
<style>
html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
}

#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
