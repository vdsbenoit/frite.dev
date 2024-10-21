<template>
  <div class="fixed bottom-6 z-40 flex w-full justify-center px-1">
    <div
      v-if="isCookieConsentShown"
      class="flex flex-row items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-2 py-2 text-sm text-gray-100 sm:gap-3 sm:px-3"
    >
      <UIcon class="size-8 sm:size-4" name="i-iconoir-half-cookie" />
      <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div class="">
          This website uses cookies.
          <ULink
            class="decoration-primary text-nowrap underline underline-offset-2 hover:text-gray-300"
            to="/cookies"
          >
            Learn more
          </ULink>
        </div>
        <div class="grid w-full grid-cols-2 gap-2 sm:w-fit">
          <UButton size="xs" block variant="solid" @click="processConsent(true)">Accept</UButton>
          <UButton
            block
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
