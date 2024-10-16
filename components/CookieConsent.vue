<template>
  <div class="fixed bottom-6 z-40 flex w-full justify-center px-4">
    <div
      v-if="isCookieConsentShown"
      class="flex items-center rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-100"
    >
      <UIcon class="me-3" name="i-iconoir-half-cookie" />
      This website uses cookies.&nbsp;
      <ULink
        class="decoration-primary text-nowrap underline underline-offset-2 hover:text-gray-300"
        to="/cookies"
        >Learn more
      </ULink>
      <UButton class="ms-3" size="xs" variant="solid" @click="processConsent(true)">Accept</UButton>
      <UButton
        class="ms-2"
        size="xs"
        color="white"
        variant="solid"
        :ui="{ color: { white: { solid: 'dark:hover:bg-gray-800' } } }"
        @click="processConsent(false)"
      >
        Reject
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core"

const isCookieConsentShown = useLocalStorage("cookie-consent-prompt", true)
const isCookieConsentGiven = useLocalStorage("cookie-consent", false)

const processConsent = (hasAccepted: boolean) => {
  isCookieConsentGiven.value = hasAccepted
  isCookieConsentShown.value = false
}
</script>

<style scoped></style>
