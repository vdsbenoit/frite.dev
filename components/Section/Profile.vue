<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="max-w-screen-lg px-6 py-6">
      <div class="grid grid-cols-7 gap-4">
        <!-- 1st block -->
        <div
          class="col-span-2 flex flex-col items-center self-center sm:row-span-2 sm:gap-y-1 sm:self-baseline"
        >
          <div class="max-h-32 max-w-32 sm:max-h-48 sm:max-w-48">
            <img
              src="~/assets/img/avatar.jpg"
              alt="Avatar"
              class="size-max rounded-full"
            />
          </div>
          <p class="hidden font-mono sm:block">@vdsbenoit</p>
          <SocialLinks class="hidden justify-center gap-x-5 sm:flex" />
          <UButton
            class="mt-8 hidden font-semibold transition hover:scale-110 sm:block"
            size="md"
            color="primary"
            variant="solid"
            to="#skills"
            >My skills</UButton
          >
        </div>

        <!-- 2nd block -->
        <div class="col-span-5 self-center leading-none sm:leading-tight">
          <span class="font-bold">Hi, I am</span><br />
          <h2 class="leading-none tracking-tight">Benoit</h2>
        </div>

        <!-- 3rd block -->
        <SocialLinks class="col-span-7 flex justify-center gap-x-7 sm:hidden" />
        <div class="col-span-7 sm:col-span-5">
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
