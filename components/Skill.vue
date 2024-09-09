<template>
  <div class="relative" ref="thisComponent">
    <div>
      <!-- Invisible div that cover the whole parent div, to increase the hover area -->
      <!-- Creating a group with the parent div induced weird hover effects with the translations -->
      <div
        class="peer absolute inset-0 z-20 cursor-pointer"
        @click="showDescription"
        ref="clickableArea"
      ></div>
      <!-- Icon -->
      <div
        id="icon"
        class="flex size-16 scale-100 items-center justify-center rounded-full border border-gray-800 bg-gray-900 ease-in-out peer-hover:z-10 peer-hover:-translate-y-4 peer-hover:scale-110 motion-safe:transition-all"
      >
        <UIcon
          v-if="icon"
          class="size-8"
          :name="icon"
          :style="{ color: color ? color : '@apply text-neutrol-300' }"
        />
        <span v-else class="text-nowrap font-bold text-gray-300">{{
          title
        }}</span>
      </div>
      <!-- Caption -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 text-nowrap rounded p-1 text-center text-sm font-semibold text-gray-800 opacity-0 ease-in-out peer-hover:z-10 peer-hover:translate-y-5 peer-hover:opacity-100 motion-safe:transition"
        :style="{ backgroundColor: color ? color : '' }"
        :class="{ 'bg-gray-300': !color }"
      >
        {{ title }}
      </div>
    </div>
    <!-- Description popup -->
    <div
      id="description"
      class="absolute top-1/2 z-30 min-w-72 -translate-y-1/2 rounded bg-gray-300 p-4 text-base text-gray-900 motion-safe:transition-transform"
      :class="{
        'scale-100': isDescriptionDisplayed,
        'scale-0': !isDescriptionDisplayed,
        invisble: isDescriptionInvisible,
        'left-1/2 -translate-x-1/2': xCenterDescription,
      }"
      ref="descriptionElement"
    >
      <div class="flex items-center justify-between">
        <h4
          class="text-nowrap rounded px-4 py-1 font-bold"
          :style="{ backgroundColor: color ? color : '' }"
          :class="{
            'text-gray-800': color,
            'bg-gray-800 text-gray-300': !color,
          }"
        >
          {{ title }}
        </h4>
        <UIcon
          class="ml-4 size-7 cursor-pointer"
          name="i-heroicons-x-mark-16-solid"
          @click="isDescriptionDisplayed = false"
        />
      </div>
      <p class="mt-3">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEventListener } from "@vueuse/core";

const props = defineProps<{
  title: string;
  icon?: string;
  color?: string;
  description: string;
}>();

const thisComponent = ref<HTMLElement | null>(null);
const clickableArea = ref<HTMLElement | null>(null);
const descriptionElement = ref<HTMLElement | null>(null);
const isDescriptionDisplayed = ref(true);
const isDescriptionInvisible = ref(true);
const descriptionWidth = ref(0);
const xCenterDescription = ref(true);

const showDescription = () => {
  if (!clickableArea.value || !descriptionElement.value) return;
  xCenterDescription.value = false;
  // Position the description div horizontally
  const clickableAreaRect = clickableArea.value.getBoundingClientRect();
  // ensure it does not go out the the viewport on the left
  if (
    clickableAreaRect.left +
      clickableAreaRect.width / 2 -
      descriptionWidth.value / 2 <
    0
  ) {
    descriptionElement.value.style.left = "0px";
    // ensure it does not go out the the viewport on the right
  } else if (
    clickableAreaRect.left +
      clickableAreaRect.width / 2 +
      descriptionWidth.value / 2 >
    window.innerWidth
  ) {
    descriptionElement.value.style.right = "0px";
  } else {
    // else, center it on the previous div (clickable area)
    xCenterDescription.value = true;
  }
  isDescriptionDisplayed.value = true;
};

const clickOutsideDescription = (event: MouseEvent) => {
  if (thisComponent.value?.contains(event.target as Node)) return;
  isDescriptionDisplayed.value = false;
};

onMounted(() => {
  // The following code is necessary to get the width of the description div.
  // Since the description div has a zero scale, its width is zero when not displayed.
  if (descriptionElement.value) {
    descriptionWidth.value =
      descriptionElement.value.getBoundingClientRect().width;
    isDescriptionDisplayed.value = false;
    isDescriptionInvisible.value = false;
  } else {
    console.error("descriptionElement is null");
  }

  useEventListener(window, "click", clickOutsideDescription);
});
</script>

<style lang="postcss" scoped>
::selection {
  @apply text-gray-100;
  background-color: v-bind(color);
}
</style>
