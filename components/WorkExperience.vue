<template>
  <div class="flex items-center">
    <!-- Left side badge -->
    <div
      class="mr-6 w-16 text-center sm:mr-8"
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
    <!-- Right side content -->
    <div
      class="border-primary relative origin-left cursor-pointer border-l py-4 pl-8 transition hover:scale-110 sm:pl-10"
    >
      <div class="line-clamp-1">
        {{ title }}
      </div>
      <div class="text-sm text-gray-400">
        <span class="font-bold uppercase">{{ company }}</span>
        <span> • </span>
        <span>{{ location }}</span>
      </div>
      <!-- Icon (absolute position, relative to content) -->
      <div
        class="absolute -left-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full"
        :class="[{ 'bg-primary': !icon }, iconWrapperClass]"
      >
        <UIcon
          v-if="!icon"
          name="i-heroicons-check-circle"
          :class="[iconClass ? iconClass : 'size-6 text-gray-800']"
        />
        <img
          v-else-if="icon.startsWith('~')"
          :src="imgPath"
          alt="icon"
          :class="[iconClass ? iconClass : 'size-8']"
        />
        <UIcon
          v-else="icon"
          :name="icon"
          :class="[iconClass ? iconClass : 'size-8']"
        />
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
  iconClass?: string;
  iconWrapperClass?: string;
  from: number;
  to?: number;
  description: string;
}>();

const isHovered = ref(false);
const isRotating = ref(false);
const badgeText = ref(props.from.toString());
const preferredMotion = usePreferredReducedMotion();

// Load the icon if it's a local asset
const assets = import.meta.glob("~/assets/img/**/*");
let imgPath = "";
if (props.icon && props.icon.startsWith("~")) {
  if (props.icon.slice(1) in assets) {
    imgPath = await assets[props.icon.slice(1)]().then(
      (module: any) => module.default,
    );
  } else {
    throw new Error(`${props.icon} not found in ~/assets/`);
  }
}

// Animate the badge text when hovering
watch(isHovered, async (newHoverState) => {
  isRotating.value = true;
  setTimeout(
    () => {
      badgeText.value = newHoverState ? durationStr : props.from.toString();
    },
    preferredMotion.value === "reduce" ? 0 : 250,
  );
  setTimeout(() => {
    isRotating.value = false;
  }, 500);
});

// Compute the duration of the work experience
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
  animation: flip 500ms forwards;
}
</style>
