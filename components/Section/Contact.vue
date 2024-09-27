<template>
  <section class="flex min-h-screen items-start justify-center pb-12 md:pb-8 lg:items-center">
    <div class="w-full max-w-screen-lg px-3 sm:px-6 xl:px-0">
      <h2 class="mb-4">Contact me</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <!-- Contact Form -->
        <UCard :ui="{ background: 'dark:bg-gray-100' }">
          <h3 class="mb-4 text-center text-xl font-semibold text-gray-800">Send a message</h3>
          <InvisibleCaptcha
            v-model:response="captchaResponse"
            v-model:error="captchaError"
            notice-class="mt-4 text-xs text-gray-800"
          >
            <UForm :schema="formSchema" :state="formData" class="space-y-4" @submit="onSubmit">
              <!-- Form Fields -->
              <UFormGroup label="Name" name="name" size="xl" :ui="UI_FORM_GROUP">
                <UInput
                  v-model="formData.name"
                  type="text"
                  icon="i-heroicons-user"
                  color="gray"
                  variant="outline"
                  :ui="UI_FORM_INPUT"
                  autocomplete="name"
                />
              </UFormGroup>
              <UFormGroup label="Email" name="email" size="xl" :ui="UI_FORM_GROUP" required>
                <UInput
                  v-model="formData.email"
                  type="email"
                  icon="i-heroicons-envelope"
                  color="gray"
                  variant="outline"
                  :ui="UI_FORM_INPUT"
                  autocomplete="email"
                />
              </UFormGroup>
              <UFormGroup label="Message" name="message" size="xl" :ui="UI_FORM_GROUP" required>
                <UTextarea
                  v-model="formData.message"
                  color="gray"
                  :ui="UI_FORM_INPUT"
                  size="xl"
                  :rows="8"
                  autoresize
                />
              </UFormGroup>
              <UTooltip
                text="Email module is not initialized"
                :prevent="emailjs.isInitialized.value"
                :popper="{ placement: 'top' }"
              >
                <UButton
                  type="submit"
                  size="xl"
                  class="mr-2"
                  :disabled="!emailjs.isInitialized.value"
                >
                  Send message
                </UButton>
              </UTooltip>
              <UButton
                :to="mailtoLink"
                size="xl"
                color="white"
                variant="solid"
                :ui="{ color: { white: { solid: 'dark:hover:bg-gray-800' } } }"
              >
                Send from your mailbox
              </UButton>
            </UForm>
          </InvisibleCaptcha>
        </UCard>

        <!-- Google Appointment Scheduler -->
        <UCard :ui="{ background: 'dark:bg-gray-100', body: { padding: 'px-0 sm:px-0 sm:pb-0' } }">
          <h3 class="mb-4 text-center text-xl font-semibold text-gray-800">
            Schedule an appointment
          </h3>
          <iframe
            title="Schedule Google Meeting"
            :src="google_scheduler_url"
            style="border: 0"
            width="100%"
            height="500"
            frameborder="0"
          ></iframe>
        </UCard>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"
import { AlertModal } from "#components"

// Props

const props = defineProps<{
  isActive: boolean
}>()

// Composables

const modal = useModal()
const toast = useToast()
const emailjs = useEmailJS()

// Constants & variables

const UI_FORM_GROUP = {
  label: { base: "dark:text-gray-700 font-semibold" },
  error: "dark:text-red-500",
}
const UI_FORM_INPUT = {
  color: {
    gray: {
      outline: "dark:text-gray-800 dark:ring-gray-300 dark:bg-gray-100",
    },
  },
  variant: {
    outline: "dark:text-gray-800 dark:bg-gray-100",
  },
}
let lastSubmittedTime = 0

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email format"),
  message: z
    .string()
    .min(80, "This is interesting! Please, tell me more.")
    .max(
      600,
      "Well, that's very long. Could you summarize it? Else, I invite you to book a call with me instead.",
    ),
})
type Schema = z.output<typeof formSchema>

const nuxtRuntimeConfig = useRuntimeConfig()
const GOOGLE_SCHEDULER_BASE_URL = "https://calendar.google.com/calendar/appointments/schedules/"
const google_scheduler_url = computed(() => {
  return `${GOOGLE_SCHEDULER_BASE_URL}${nuxtRuntimeConfig.public.googleSchedulerCalendarId}?gv=true`
})

// Reactive data

const formData = reactive({
  name: undefined,
  email: undefined,
  message: undefined,
})
const subject = computed(() => {
  return `Message from ${formData.name || "frite.dev"}`
})
const captchaResponse = ref("")
const captchaError = ref(false)

// Methods

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  if (!captchaResponse.value) {
    modal.open(AlertModal, {
      title: "reCAPTCHA validation failed",
      description: captchaError.value
        ? "Please use the other button to send it from your inbox"
        : "Please complete the reCAPTCHA validation, or use the other button to send it from your inbox.",
    })
    return
  }

  const currentTime = Date.now()
  const timeDiff = currentTime - lastSubmittedTime

  if (timeDiff < 60000) {
    // 1 minute limit between submissions
    modal.open(AlertModal, {
      title: "Too many submissions",
      description: "Please wait before submitting again.",
    })
    return
  }

  lastSubmittedTime = currentTime

  const templateParams = {
    name: event.data.name,
    email: event.data.email,
    message: event.data.message,
    "g-recaptcha-response": captchaResponse.value,
  }

  // Configure emailjs
  // Send email using EmailJS, include captcha response for backend validation
  const { success } = await emailjs.send(templateParams)
  if (success) {
    toast.add({ title: "Message sent", id: "message-sent", color: "green" })
  } else {
    toast.add({
      title: "Failed to send message",
      description: "Use the other button to send it from your inbox please",
      id: "message-error",
      color: "red",
      timeout: 8000,
    })
  }
}

// URL encoding the message for the mailto link
const mailtoLink = computed(() => {
  let mailto = `mailto:${nuxtRuntimeConfig.public.contactFormToEmail}?subject=${encodeURIComponent(subject.value)}`
  if (formData.message) mailto += `&body=${encodeURIComponent(formData.message)}`
  return mailto
})
</script>

<style scoped></style>
