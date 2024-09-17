<template>
  <div
    class="flex items-center *:transition motion-safe:hover:*:-translate-y-1 motion-safe:hover:*:scale-110"
  >
    <NuxtLink to="https://github.com/vdsbenoit" target="_blank">
      <UIcon name="i-simple-icons-github" class="text-xl" />
    </NuxtLink>
    <NuxtLink to="https://gitlab.com/vdsbenoit" target="_blank">
      <UIcon name="i-vscode-icons-file-type-gitlab" class="text-2xl" />
    </NuxtLink>
    <NuxtLink to="https://linkedin.com/in/vdsbenoit" target="_blank">
      <UIcon name="i-logos-linkedin-icon" class="text-xl" />
    </NuxtLink>
    <NuxtLink to="mailto:benoit@frite.dev" target="_blank">
      <UIcon name="i-logos-google-gmail" class="text-xl" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
