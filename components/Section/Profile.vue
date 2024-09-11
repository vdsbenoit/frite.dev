<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="mt-4 max-w-screen-lg px-2 py-6">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-7">
        <!-- First Column -->
        <div
          class="col-span-1 flex flex-col items-center gap-y-2 sm:col-span-2"
        >
          <div class="sm:max-h-64 sm:max-w-64">
            <img
              src="~/assets/img/avatar.jpg"
              alt="Avatar"
              class="size-max rounded-full"
            />
          </div>
          <p class="font-mono">@vdsbenoit</p>
          <div
            class="flex items-center justify-center gap-x-4 *:transition hover:*:-translate-y-1 hover:*:scale-110"
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
          <UButton
            class="mt-2 transition hover:scale-110"
            size="md"
            color="primary"
            variant="solid"
            to="#skills"
            >My skills</UButton
          >
        </div>

        <!-- Second Column -->
        <div class="col-span-1 sm:col-span-5">
          <span class="font-bold">Hi, I am</span><br />
          <h2
            class="mb-4 bg-gradient-to-t from-gray-400 to-gray-100 bg-clip-text text-transparent"
          >
            Benoit
          </h2>
          <p class="mb-6">
            I am a
            <span class="decoration-primary underline underline-offset-2"
              >freelance developer.</span
            >
            I find solutions to business issues using technology. I have more
            than
            <span class="decoration-primary underline underline-offset-2"
              >{{ workTimeYears }} years of experience</span
            >
            in software development, testing, automation and DevOps. I have
            worked in
            <span class="decoration-primary underline underline-offset-2"
              >various industries</span
            >
            such as health, education, entertainment and new technologies.
          </p>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold">2023 - Present</h3>
              <p class="text-sm">1 year</p>
              <h4 class="text-md font-medium">Senior Developer</h4>
              <p class="text-sm">Company XYZ</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">2021 - 2023</h3>
              <p class="text-sm">2 years</p>
              <h4 class="text-md font-medium">Mid-level Developer</h4>
              <p class="text-sm">Company ABC</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">2019 - 2021</h3>
              <p class="text-sm">2 years</p>
              <h4 class="text-md font-medium">Junior Developer</h4>
              <p class="text-sm">Company DEF</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">2017 - 2019</h3>
              <p class="text-sm">2 years</p>
              <h4 class="text-md font-medium">Intern</h4>
              <p class="text-sm">Company GHI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const workTime = new Date().getTime() - new Date(2016, 8).getTime();
const workTimeYears = Math.floor(workTime / (1000 * 60 * 60 * 24 * 365.25));
</script>

<style scoped></style>
