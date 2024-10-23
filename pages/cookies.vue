<template>
  <div class="flex min-h-screen items-start justify-center">
    <div class="mt-2 max-w-screen-lg px-3 sm:mt-16 sm:px-6 xl:px-0">
      <h2 class="mt-4">Cookies & privacy</h2>
      <p class="py-2">
        Your privacy is extremely important to us. We are committed to handling your personal data
        in a legal, fair, and transparent way. This privacy statement complies with the General Data
        Protection Regulation (GDPR), effective since May 25, 2018. This website uses cookies to
        enhance the browsing experience for our visitors. Cookies help our site perform better and
        adapt to your preferences. Although this website only stores some necessary preferences
        cookies, it also relies on some Google services, such as reCAPTCHA and Google Calendar.
        These external services may set cookies to collect certain data, such as analyzing visitor
        browsing behavior.
      </p>
      <h3 class="mt-4">Cookie Settings</h3>
      <!-- prettier-ignore -->
      <p class="py-2">
        User settings cookies are necessary and are always enabled. 
        Optional cookies (incl. Google's) are disabled by default. 
        You can change this setting using the switch below.
        Please note that disabling optional cookies will prevent some features from functioning properly.
      </p>
      <div class="flex items-center gap-x-2 py-2">
        <UToggle v-model="isCookieConsentGiven" name="cookieToggle" />
        <p>
          Optional cookies are
          <span v-if="isCookieConsentGiven" class="text-green-600"> enabled </span>
          <span v-else class="text-red-600"> disabled </span>
        </p>
      </div>
      <h3 class="mt-4">Removing Cookies</h3>
      <p class="py-2">
        Most web browsers allow you to delete cookies from your device. You can also block cookies
        in advance or request a warning before cookies are installed. For more information, refer to
        your browser's instructions or help section.
      </p>
      <UButton class="mt-4" icon="i-heroicons-arrow-small-left" color="gray" variant="solid" to="/">
        Back to homepage
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Reactive data

const route = useRoute()
const isCookieConsentShown = useCookie("cookie-consent-prompt", { default: () => true })
const isCookieConsentGiven = useCookie("cookie-consent", { default: () => false })
const isBackgroundBlurred = useState("blurBackground", () => false)

// Watchers

watch(isCookieConsentGiven, () => {
  isCookieConsentShown.value = false
})
watch(
  route,
  (newRoute) => {
    if (newRoute.name === "cookies") {
      isBackgroundBlurred.value = true
    }
  },
  { immediate: true },
)
</script>

<style scoped>
/* Add any additional styling here */
</style>
