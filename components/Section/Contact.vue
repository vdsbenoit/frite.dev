<template>
  <div class="flex min-h-screen items-start justify-center md:items-center">
    <div class="container mx-auto px-4">
      <h2 class="mb-8">Contact Me</h2>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <!-- Contact Form -->
        <div class="rounded-lg bg-gray-100 p-6 shadow-lg">
          <h3 class="mb-4 text-center text-xl font-semibold text-gray-800">
            Send a Message
          </h3>
          <form @submit.prevent="submitForm" class="text-gray-800">
            <!-- Form Fields -->
            <div class="mb-4">
              <label for="name" class="block font-semibold text-gray-700"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full rounded-lg border border-gray-300 p-2"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block font-semibold text-gray-700"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full rounded-lg border border-gray-300 p-2"
                required
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block font-semibold text-gray-700"
                >Message</label
              >
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full rounded-lg border border-gray-300 p-2"
                required
              ></textarea>
            </div>

            <!-- reCAPTCHA -->
            <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>

            <UButton type="submit" size="xl" class="mr-2">
              Send Message
            </UButton>
            <UButton :to="mailtoLink" size="xl" color="white"
              >Send it from your mailbox
            </UButton>
          </form>
        </div>

        <!-- Google Appointment Schedule -->
        <div class="rounded-lg bg-gray-100 p-6 text-center shadow-lg">
          <h3 class="mb-4 text-xl font-semibold text-gray-800">
            Schedule an Appointment
          </h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your-calendar-id&ctz=your-timezone"
            style="border: 0"
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const EMAIL_BENOIT = "benoit@frite.dev";
const SUBJECT = "Contact from frite.dev";

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

let lastSubmittedTime = 0;

const submitForm = () => {
  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse) {
    alert("Please complete the CAPTCHA");
    return;
  }

  const currentTime = Date.now();
  const timeDiff = currentTime - lastSubmittedTime;

  if (timeDiff < 60000) {
    // 1 minute limit between submissions
    alert("Please wait before submitting again.");
    return;
  }

  lastSubmittedTime = currentTime;

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    "g-recaptcha-response": captchaResponse,
  };

  // Send email using EmailJS, include captcha response for backend validation
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
    .then(() => {
      alert("Message sent!");
    })
    .catch((error: any) => {
      console.error(error);
      alert("Failed to send message.");
    });
};

// URL encoding the message for the mailto link
const mailtoLink = computed(() => {
  let mailto = `mailto:${EMAIL_BENOIT}?subject=${encodeURIComponent(SUBJECT)}`;
  if (formData.message)
    mailto += `&body=${encodeURIComponent(formData.message)}`;
  return mailto;
});
</script>

<style scoped></style>
