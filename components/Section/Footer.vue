<template>
  <footer class="mx-auto max-w-screen-lg px-3 sm:px-6 xl:px-0">
    <UDivider size="xs">
      <SocialLinks class="mx-4 space-x-8" :black-and-white="true" />
    </UDivider>
    <div class="relative mb-4 mt-4">
      <div class="flex flex-col items-center justify-center space-y-3 text-gray-500">
        <!-- Left column: Logo, copyright, and brief about -->
        <div class="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-1 sm:space-y-0">
          <img
            src="~/assets/img/company-logo.png"
            alt="company logo"
            class="mx-auto h-8 w-auto sm:h-10"
          />
          <p class="text-center text-sm sm:text-start">
            frite.dev &copy; {{ new Date().getFullYear() }} - All rights reserved
            <br />
            VAT BE1010 351 307 -
            <ULink to="mailto:benoit@frite.dev" class="text-sm hover:text-gray-300">
              benoit@frite.dev
            </ULink>
          </p>
        </div>

        <!-- Middle column: Navigation -->
        <nav class="flex divide-x divide-gray-500 *:px-3 hover:*:text-gray-300">
          <ULink to="#hero" class="block text-sm">Home</ULink>
          <ULink to="#profile" class="block text-sm">Profile</ULink>
          <ULink to="#skills" class="text-sm">Skills</ULink>
          <ULink to="#contact" class="text-sm">Contact</ULink>
        </nav>

        <p class="text-center text-sm">
          Made with <UIcon name="i-heroicons-heart-solid" />
          <ULink to="https://en.wikipedia.org/wiki/Belgium"> from 🇧🇪 </ULink>
        </p>
      </div>

      <div class="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:block">
        <UButton icon="i-mdi-arrow-up" color="gray" variant="ghost" @click="scrollToTop">
          Back to top
        </UButton>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<style scoped></style>
