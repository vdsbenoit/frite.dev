<template>
  <div class="flex items-center" ref="thisComponent">
    <!-- Left side badge -->
    <div
      class="mr-6 shrink-0 overflow-hidden text-center motion-safe:transition-all motion-safe:duration-700 sm:mr-8 sm:block sm:w-16"
      :class="[isOpen ? 'hidden w-0' : 'w-16']"
      @mouseenter="isBadgeHovered = true"
      @mouseleave="isBadgeHovered = false"
    >
      <UBadge
        :class="{ 'flip-badge': isBadgeRotating }"
        color="primary"
        variant="outline"
      >
        {{ badgeText }}
      </UBadge>
    </div>
    <!-- Right side content -->
    <div
      class="border-primary relative origin-left motion-safe:transition-all motion-safe:hover:scale-110 sm:border-l sm:pl-10"
      :class="[
        isOpen
          ? 'z-0 scale-110 cursor-default py-8 motion-safe:duration-500'
          : 'z-10 cursor-pointer border-l py-4 pl-8',
      ]"
      @click="isOpen = true"
    >
      <div
        class="decoration-primary line-clamp-1 underline-offset-4 motion-safe:transition-all motion-safe:duration-700"
        :class="{
          'mb-2 font-semibold underline': isOpen,
        }"
      >
        {{ title }}
      </div>
      <p
        class="w-10/12 overflow-hidden border-l-2 border-gray-500 bg-gray-800 px-3 text-justify text-sm motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-in-out sm:px-4"
        :class="[isOpen ? 'max-h-[1000px] py-2' : 'max-h-0 py-0']"
      >
        <span v-html="description"></span>
      </p>

      <div class="text-sm text-gray-400" :class="{ 'mt-2': isOpen }">
        <span class="font-bold uppercase">{{ company }}</span>
        <span> • </span>
        <span>{{ location }}</span>
      </div>
      <!-- Icon (absolute position, relative to content) -->
      <div
        class="absolute -left-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full sm:scale-100"
        :class="[
          { 'bg-primary': !icon },
          iconWrapperClass,
          isOpen ? 'scale-0' : 'scale-100',
        ]"
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
import { useEventListener, usePreferredReducedMotion } from "@vueuse/core";

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

const preferredMotion = usePreferredReducedMotion();
const thisComponent = ref<HTMLElement | null>(null);
const isBadgeHovered = ref(false);
const isBadgeRotating = ref(false);
const badgeText = ref(props.from.toString());
const isOpen = ref(false);

// Compute the duration of the work experience
const experienceDuration = computed(() => {
  if (!props.to) return "Current";
  const duration = props.to - props.from;
  return `${duration} year${duration > 1 ? "s" : ""}`;
});

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
watch(isBadgeHovered, async (newHoverState) => {
  isBadgeRotating.value = true;
  setTimeout(
    () => {
      badgeText.value = newHoverState
        ? experienceDuration.value
        : props.from.toString();
    },
    preferredMotion.value === "reduce" ? 0 : 250,
  );
  setTimeout(() => {
    isBadgeRotating.value = false;
  }, 500);
});

const clickOutsideDescription = (event: MouseEvent) => {
  if (thisComponent.value?.contains(event.target as Node)) return;
  isOpen.value = false;
};

onMounted(() => {
  useEventListener(window, "click", clickOutsideDescription);
});
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
@media (prefers-reduced-motion) {
  .flip-badge {
    animation: none;
  }
}
</style>
