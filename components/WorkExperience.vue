<template>
  <div class="flex items-center">
    <div
      class="w-24 pr-4 text-center"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <UBadge
        :class="{ 'flip-badge': isRotating }"
        color="primary"
        variant="outline"
        :style="{
          animation: preferredMotion === 'reduce' ? '' : 'flip 1s forwards;',
        }"
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
        v-if="icon || img"
        class="absolute -left-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full"
        :class="[iconBg]"
      >
        <UIcon v-if="icon" :name="icon" class="size-8" />
        <img v-if="img" :src="img" alt="icon" class="size-8" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  promiseTimeout,
  set,
  useMouseInElement,
  usePreferredReducedMotion,
} from "@vueuse/core";

const props = defineProps<{
  title: string;
  company: string;
  location: string;
  icon?: string;
  img?: string;
  iconBg?: string;
  from: number;
  to?: number;
  description: string;
}>();

const isHovered = ref(false);
const isRotating = ref(false);
const badgeText = ref(props.from.toString());
const preferredMotion = usePreferredReducedMotion();

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
