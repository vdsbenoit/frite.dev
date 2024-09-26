<!-- 
This component adds an invisible reCaptcha validation to a form.
Instructions of use : 
 - Set the reCaptcha site key in the public.captchaSiteKey property of the nuxt.config.ts file.
 - Wrap the form with this component. It will automatically execute the reCaptcha validation when the form is focused out.
 - In the parent component, read the v-model:response and v-model:error values to check the validation status.

Since, the reCaptcha badge is hidden by default, this component adds a notice to the user that the site is protected by reCaptcha, 
in order to comply with Google's terms of service. One can customize the notice text by passing the notice-class prop.
-->
<template>
  <div>
    <div @focusout="execute">
      <slot />
    </div>
    <div
      class="g-recaptcha"
      :data-sitekey="nuxtRuntimeConfig.public.captchaSiteKey"
      data-callback="captchaCallback"
      data-size="invisible"
      data-expired-callback="captchaExpiredCallback"
      data-error-callback="captchaErrorCallback"
    ></div>

    <p :class="noticeClass">
      This site is protected by reCAPTCHA and the Google
      <ULink to="https://policies.google.com/privacy" target="_blank" class="underline">
        Privacy Policy
      </ULink>
      and
      <ULink to="https://policies.google.com/terms" target="_blank" class="underline">
        Terms of Service
      </ULink>
      apply.
    </p>
  </div>
</template>

<script lang="ts" setup>
const nuxtRuntimeConfig = useRuntimeConfig()
const response = defineModel<string>("response")
const error = defineModel<boolean>("error")
defineProps({
  noticeClass: {
    type: String,
    default: "text-xs text-gray-800",
  },
})

const execute = () => {
  if (response.value != "") return
  if (!window.grecaptcha) {
    console.error("reCAPTCHA not loaded")
    return
  }
  try {
    window.grecaptcha.execute()
    console.log("reCAPTCHA executed")
  } catch (error) {
    console.error("reCAPTCHA error", error)
  }
}

onMounted(() => {
  window.captchaCallback = (resp: string) => {
    console.log("reCAPTCHA response", resp)
    response.value = resp
  }
  window.captchaExpiredCallback = () => {
    console.log("reCAPTCHA expired. Executing again.")
    response.value = ""
    execute()
  }
  window.captchaErrorCallback = () => {
    console.error("reCAPTCHA error")
    response.value = ""
    error.value = true
  }
  if (!window.grecaptcha) {
    useScript({
      src: "https://www.google.com/recaptcha/api.js",
      defer: true,
      async: true,
      referrerpolicy: false,
      crossorigin: false,
    })
  }
})
</script>

<style>
.grecaptcha-badge {
  visibility: hidden;
}
</style>
