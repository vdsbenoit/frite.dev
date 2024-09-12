<template>
  <div class="flex items-center">
    <div
      class="w-24 pr-4 text-center"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <UBadge
        :class="{ 'flip-badge': isRotating && preferredMotion != 'reduce' }"
        color="primary"
        variant="outline"
      >
        {{ badgeText }}
      </UBadge>
    </div>
    <div class="border-primary relative border-l py-4 pl-8">
      <div class="">
        {{ title }}
      </div>
      <div class="text-sm text-gray-400">
        <span class="font-bold uppercase">{{ company }}</span>
        <span> • </span>
        <span>{{ location }}</span>
      </div>
      <div
        class="absolute -left-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full"
        :class="[icon ? iconBg : 'bg-primary']"
      >
        <UIcon
          v-if="!icon"
          name="i-heroicons-check-circle"
          class="size-6 text-gray-800"
        />
        <img
          v-else-if="icon.startsWith('~')"
          :src="imgPath"
          alt="icon"
          class="size-8"
        />
        <UIcon v-else="icon" :name="icon" class="size-8" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePreferredReducedMotion } from "@vueuse/core";

const props = defineProps<{
  title: string;
  company: string;
  location: string;
  icon?: string;
  iconBg?: string;
  from: number;
  to?: number;
  description: string;
}>();

const isHovered = ref(false);
const isRotating = ref(false);
const badgeText = ref(props.from.toString());
const preferredMotion = usePreferredReducedMotion();

const assets = import.meta.glob("~/assets/icons/experiences/*.svg");
let imgPath = "";
if (props.icon && props.icon.startsWith("~")) {
  if (props.icon.slice(1) in assets) {
    imgPath = await assets[props.icon.slice(1)]().then(
      (module: any) => module.default,
    );
  } else {
    throw new Error(`${props.icon} not found in ~/assets/icons/experiences/`);
  }
}

watch(isHovered, async (newHoverState) => {
  isRotating.value = true;
  setTimeout(
    () => {
      badgeText.value = newHoverState ? durationStr : props.from.toString();
    },
    preferredMotion.value === "reduce" ? 0 : 500,
  );
  setTimeout(() => {
    isRotating.value = false;
  }, 1000);
});

let durationStr: string;
if (props.to) {
  const duration = props.to - props.from;
  durationStr = `${duration} year`;
  if (duration > 1) durationStr = durationStr + "s";
} else durationStr = "Current";
</script>
<style scoped>
@keyframes flip {
  from {
    transform: rotateX(-360deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
.flip-badge {
  animation: flip 1s forwards;
}
</style>
