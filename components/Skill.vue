<template>
  <div class="relative inline-block">
    <div
      class="group m-1 cursor-pointer border border-white"
      @click="showDescription = true"
      ref="currentElement"
    >
      <div
        class="flex size-16 scale-75 items-center justify-center rounded-full bg-gray-800 transition-transform ease-in-out group-hover:-translate-y-3 group-hover:scale-100"
      >
        <UIcon class="size-8" :name="icon" :style="{ color }" />
      </div>
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 text-center opacity-0 transition ease-in-out group-hover:translate-y-3 group-hover:opacity-100"
      >
        <span
          class="rounded p-1 text-xs text-gray-800"
          :style="{ backgroundColor: color }"
          >{{ title }}</span
        >
      </div>
    </div>
    <div
      class="absolute top-0 z-10 h-auto w-72 rounded bg-gray-100 p-4 text-base text-gray-800 transition-transform"
      :class="{ 'scale-100': showDescription, 'scale-0': !showDescription }"
    >
      <h4
        class="mx-auto inline rounded px-3 py-1 font-bold text-gray-800"
        :style="{ backgroundColor: color }"
      >
        {{ title }}
      </h4>
      <p class="mt-3">{{ description }}</p>
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

<style scoped>
/* Add any additional scoped styles here */
</style>
