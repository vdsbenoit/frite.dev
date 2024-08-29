<template>
  <div>
    <div
      v-for="(star, index) in stars1"
      class="stars1 absolute"
      :key="index"
      :style="{ top: star.top, left: star.left }"
    >
      <img src="~/assets/img/frite.png" alt="fry" class="h-2" />
    </div>
    <div
      v-for="(star, index) in stars2"
      class="stars2 absolute"
      :key="index"
      :style="{ top: star.top, left: star.left }"
    >
      <img src="~/assets/img/frite.png" alt="fry" class="h-4" />
    </div>
    <div
      v-for="(star, index) in stars3"
      class="stars3 absolute"
      :key="index"
      :style="{ top: star.top, left: star.left }"
    >
      <img src="~/assets/img/frite.png" alt="fry" class="h-7" />
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
  top: string;
  left: string;
}

const stars1 = ref<Star[]>([]);
const stars2 = ref<Star[]>([]);
const stars3 = ref<Star[]>([]);

const generateStars = (n: number): Star[] => {
  const stars: Star[] = [];
  const viewportWidth = window.innerWidth;

  for (let i = 0; i < 100; i++) {
    const star: Star = {
      top: `${Math.floor(Math.random() * 2000)}px`,
      left: `${Math.floor(Math.random() * viewportWidth)}px`,
    };

    stars.push(star);
  }
  return stars;
};

onMounted(() => {
  stars1.value = generateStars(700);
  stars2.value = generateStars(200);
  stars3.value = generateStars(100);
});
</script>
<style>
html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

.stars1,
.stars1:after {
  animation: animStar 50s linear infinite;
}

.stars1:after {
  position: absolute;
  top: 2000px;
}

.stars2,
.stars2:after {
  animation: animStar 100s linear infinite;
}

.stars2:after {
  position: absolute;
  top: 2000px;
}

.stars3,
.stars3:after {
  animation: animStar 150s linear infinite;
}

.stars3:after {
  position: absolute;
  top: 2000px;
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

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
