<template>
  <ClientOnly>
    <FriteBackground />
  </ClientOnly>
  <NuxtPage />
  <UModals />
  <UNotifications />
</template>
<script lang="ts" setup>
onMounted(() => {
  // Prevent gesture zoom on mobile
  document.addEventListener("gesturestart", (e) => e.preventDefault())
})
</script>
