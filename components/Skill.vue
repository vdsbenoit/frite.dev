<template>
  <div class="relative" ref="currentElement">
    <div>
      <!-- Invisible div that cover the whole parent div, to increase the hover area -->
      <!-- Creating a group with the parent div induced weird hover effects with the translations -->
      <div
        class="peer absolute bottom-0 left-0 right-0 top-0 z-20 cursor-pointer"
        @click="showDescription = true"
      ></div>
      <!-- Icon -->
      <div
        id="icon"
        class="flex size-16 scale-100 items-center justify-center rounded-full border border-gray-800 bg-gray-900 ease-in-out peer-hover:z-10 peer-hover:-translate-y-4 peer-hover:scale-110 motion-safe:transition-all"
      >
        <UIcon class="size-8" :name="icon" :style="{ color }" />
      </div>
      <!-- Caption -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 text-nowrap rounded p-1 text-center text-sm text-gray-800 opacity-0 ease-in-out peer-hover:z-10 peer-hover:translate-y-4 peer-hover:opacity-100 motion-safe:transition"
        :style="{ backgroundColor: color }"
      >
        {{ title }}
      </div>
    </div>
    <!-- Description popup -->
    <div
      id="description"
      class="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded bg-gray-300 p-4 text-base text-gray-900 motion-safe:transition-transform"
      :class="{ 'scale-100': showDescription, 'scale-0': !showDescription }"
    >
      <div class="flex items-center justify-between">
        <h4
          class="rounded px-4 py-1 font-bold text-gray-800"
          :style="{ backgroundColor: color }"
        >
          {{ title }}
        </h4>
        <UIcon
          class="size-7 cursor-pointer pr-4"
          name="i-heroicons-x-mark-16-solid"
          @click="showDescription = false"
        />
      </div>
      <p class="mt-3 h-auto w-60">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEventListener } from "@vueuse/core";

const props = defineProps<{
  title: string;
  icon: string;
  color: string;
  description: string;
}>();

const currentElement = ref<HTMLElement | null>(null);
const showDescription = ref(false);

const hideDescription = (event: MouseEvent) => {
  if (currentElement.value?.contains(event.target as Node)) return;
  showDescription.value = false;
};

onMounted(() => {
  useEventListener(window, "click", hideDescription);
});
</script>

<style scoped></style>
