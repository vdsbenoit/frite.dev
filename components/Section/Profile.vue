<template>
  <div class="max-w-screen-lg px-6">
    <h2 class="">Hi, I am Benoit</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-5">
      <!-- First Column -->
      <div class="col-span-1 flex flex-col items-center sm:col-span-2">
        <img
          src="~/assets/img/avatar.jpg"
          alt="Avatar"
          class="mb-4 size-72 rounded-full"
        />
        <h2 class="text-xl font-semibold">@vdsbenoit</h2>
        <div class="mt-4 flex space-x-4">
          <a href="https://github.com/vdsbenoit" target="_blank">
            <UIcon name="i-simple-icons-github" class="text-2xl" />
          </a>
          <a href="https://gitlab.com/vdsbenoit" target="_blank">
            <UIcon name="i-vscode-icons-file-type-gitlab" class="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/vdsbenoit" target="_blank">
            <UIcon name="i-logos-linkedin-icon" class="text-2xl" />
          </a>
        </div>
      </div>

      <!-- Second Column -->
      <div class="col-span-1 sm:col-span-3">
        <p class="mb-6">
          This is a placeholder description for the profile. It gives a brief
          overview of the individual's professional background and achievements.
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
          <div>
            <h3 class="text-lg font-semibold">2015 - 2017</h3>
            <p class="text-sm">2 years</p>
            <h4 class="text-md font-medium">Student</h4>
            <p class="text-sm">University JKL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
