<template>
  <div class="relative inline-block">
    <div
      class="group m-1 cursor-pointer border border-white"
      @click="showDescription = !showDescription"
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
      v-if="showDescription"
      class="absolute left-full top-0 ml-4 rounded bg-gray-800 p-4 text-white"
      :style="{ backgroundColor: color || '' }"
    >
      <h3 class="font-bold">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  icon: string;
  color: string;
  description: string;
}>();

const showDescription = ref(false);
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
