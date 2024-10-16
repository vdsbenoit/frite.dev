<template>
  <div class="flex min-h-screen items-start justify-center lg:items-center">
    <div class="mt-2 max-w-screen-lg px-3 sm:mt-0 sm:px-6 xl:px-0">
      <h2 class="mb-4">Cookies & privacy</h2>
      <p>
        Your privacy is extremely important to us. We are committed to handling your personal data
        in a legal, fair, and transparent way. This privacy statement complies with the General Data
        Protection Regulation (GDPR), effective since May 25, 2018. This website uses cookies to
        enhance the browsing experience for our visitors. Cookies help our site perform better and
        adapt to your preferences. Although this website doesn't store cookies directly on your
        device, it does rely on some Google services, such as reCAPTCHA and Google Calendar. These
        external services may set cookies to collect certain data, such as analyzing visitor
        browsing behavior.
      </p>
      <h2 class="mb-4">Cookie Settings</h2>
      <p>
        Cookies are disabled by default. You can change this setting using the switch below. Please
        note that disabling cookies may prevent some features from functioning properly.
      </p>
      <UToggle v-model="isCookieConsentGiven" name="cookieToggle" /> Cookies are
      <span v-if="isCookieConsentGiven" class="text-green-800"> enabled </span>
      <span v-else class="text-red-700"> disabled </span>.
      <h2 class="mb-4">Removing Cookies</h2>
      <p>
        Most web browsers allow you to delete cookies from your device. You can also block cookies
        in advance or request a warning before cookies are installed. For more information, refer to
        your browser's instructions or help section.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core"

const isCookieConsentShown = useLocalStorage("cookie-consent-prompt", true)
const isCookieConsentGiven = useLocalStorage("cookie-consent", false)

watch(isCookieConsentGiven, () => {
  isCookieConsentShown.value = false
})
</script>

<style scoped>
/* Add any additional styling here */
</style>
