<template>
  <div
    v-if="isCookieConsentShown"
    class="fixed bottom-6 z-40 mx-auto flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100"
  >
    <p>
      <UIcon name="i-iconoir-half-cookie" /> This website uses cookies.
      <ULink to="/cookies">Learn more</ULink>
    </p>
    <UButton @click="accept">OK</UButton>
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core"

const isCookieConsentShown = useLocalStorage("cookie-consent-prompt", true)
const isCookieConsentGiven = useLocalStorage("cookie-consent", false)

const accept = () => {
  isCookieConsentGiven.value = true
  isCookieConsentShown.value = false
}
</script>

<style scoped></style>
