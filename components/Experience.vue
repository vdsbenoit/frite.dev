<template>
  <div></div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
  icon?: string;
  from: Date;
  to?: Date;
  description: string;
}>();
</script>

<style scoped></style>
