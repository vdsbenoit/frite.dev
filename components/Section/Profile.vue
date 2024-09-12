<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="max-w-screen-lg px-4 sm:px-6">
      <div class="grid grid-cols-7 gap-4">
        <!-- 1st block -->
        <div
          class="col-span-2 flex flex-col items-center self-center sm:row-span-2 sm:gap-y-2 sm:self-baseline"
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
            class="mt-4 hidden font-semibold transition hover:scale-110 sm:block"
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
          <div>
            <WorkExperience
              title="Freelance Developer"
              company="frite.dev"
              location="Brussels"
              icon="~/assets/img/company-logo.png"
              icon-class="size-7"
              icon-wrapper-class="bg-gray-950"
              :from="2024"
              description=""
            />
            <WorkExperience
              title="Senior DevOps Engineer"
              company="Sony"
              location="Brussels"
              icon="i-simple-icons-sony"
              icon-wrapper-class="bg-gray-950"
              :from="2022"
              :to="2024"
              description=""
            />
            <WorkExperience
              title="DevOps Engineer"
              company="Sony"
              location="Brussels"
              icon="i-simple-icons-sony"
              icon-wrapper-class="bg-gray-950"
              :from="2019"
              :to="2022"
              description=""
            />
            <WorkExperience
              title="Software Test Engineer"
              company="Sony"
              location="Brussels"
              icon="i-simple-icons-sony"
              icon-wrapper-class="bg-gray-950"
              :from="2018"
              :to="2019"
              description=""
            />
            <WorkExperience
              title="Software Test Engineer"
              company="IBA"
              location="Louvain-la-Neuve"
              icon="~/assets/img/iba.svg"
              icon-class="size-10"
              icon-wrapper-class="bg-[#69BE28]"
              :from="2016"
              :to="2018"
              description=""
            />
            <WorkExperience
              title="Computer Science degree"
              company="EPHEC"
              location="Louvain-la-Neuve"
              icon="~/assets/img/ephec.svg"
              icon-wrapper-class="bg-gray-100"
              :from="2012"
              :to="2015"
              description=""
            />
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
