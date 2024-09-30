<template>
  <section class="flex min-h-screen items-start justify-center pb-24 md:pb-0 lg:items-center">
    <div class="mt-2 max-w-screen-lg px-3 sm:mt-0 sm:px-6 xl:px-0">
      <div class="flex gap-x-8">
        <!-- left panel -->
        <!-- visible only over the sm breakpoint -->
        <div class="hidden flex-shrink-0 flex-col items-center gap-y-2 sm:flex">
          <div
            class="via-primary max-h-48 max-w-48 rounded-full bg-gradient-to-r from-gray-900 to-red-400 p-0.5"
          >
            <img src="~/assets/img/avatar.jpg" alt="Avatar" class="rounded-full" />
          </div>
          <p class="hidden font-mono sm:block">@vdsbenoit</p>
          <SocialLinks class="hidden justify-center gap-x-5 sm:flex" />
          <UButton
            class="mt-4 hidden font-semibold transition ease-in motion-safe:hover:scale-110 sm:block"
            size="md"
            color="primary"
            variant="solid"
            to="#skills"
            >My skills</UButton
          >
        </div>

        <!-- right panel -->
        <div class="flex flex-grow flex-col gap-y-4">
          <!-- 1st block : Greeting (+ avatar below sm breakpoint) -->
          <div class="flex items-center gap-x-4">
            <div
              class="via-primary block h-20 w-20 rounded-full bg-gradient-to-r from-gray-900 to-red-400 p-0.5 sm:hidden"
            >
              <img src="~/assets/img/avatar.jpg" alt="Avatar" class="rounded-full" />
            </div>
            <div class="leading-none sm:leading-tight">
              <span class="font-bold">Hi, I am</span><br />
              <h2 class="leading-none tracking-tight">Benoit</h2>
            </div>
          </div>

          <!-- 2nd block : short description -->

          <p class="lg:pr-6">
            I am a freelance
            <span class="decoration-primary underline underline-offset-2">software engineer</span>.
            I find solutions to business issues using technology. I have more than
            <span class="decoration-primary underline underline-offset-2"
              >{{ workTimeYears }} years of experience</span
            >
            in software development, testing, automation and DevOps. I have worked in
            <span class="decoration-primary underline underline-offset-2">various industries</span>
            such as health, education, entertainment and new technologies.
          </p>

          <SocialLinks class="flex justify-center gap-x-11 sm:hidden" />

          <!-- 3rd block : work experiences -->
          <div class="mt-2">
            <WorkExperience
              v-for="(experience, index) in workExperiences"
              :key="index"
              :title="experience.title"
              :company="experience.company"
              :location="experience.location"
              :icon="experience.icon"
              :icon-class="experience.iconClass"
              :icon-wrapper-class="experience.iconWrapperClass"
              :from="experience.from"
              :to="experience.to"
              :description="experience.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Props

const props = defineProps<{
  isActive: boolean
}>()

const workTime = new Date().getTime() - new Date(2016, 8).getTime()
const workTimeYears = Math.floor(workTime / (1000 * 60 * 60 * 24 * 365.25))

const workExperiences = [
  {
    title: "Freelance Software Engineer",
    company: "frite.dev",
    location: "Brussels",
    icon: "~/assets/img/logo-transparent.png",
    iconClass: "size-7",
    iconWrapperClass: "bg-gray-950",
    from: 2024,
    description: `
      As of 2024, I work on my own as a freelance software engineer, under the name of frite.dev.
      <br /><br />
      I provide services to businesses in various software engineering fields, including development, automation and DevOps.
      My expertise lies in analyzing my client's challenges, then providing tailored solutions by leveraging the right technologies.
    `,
  },
  {
    title: "DevOps Engineer",
    company: "Sony",
    location: "Brussels",
    icon: "i-simple-icons-sony",
    iconWrapperClass: "bg-gray-950",
    from: 2019,
    to: 2024,
    description: `
      I was in charge the transition of the company towards DevOps fundamentals. It involved efforts both on the technical and human sides.
      This achievement elevated me to a Senior position within the company.
      <br /><br />
      During my first year at Sony, I had the opportunity to analyze the development processes of the company. 
      Since I was informed about the latest innovations on this topic, I accepted to take a new DevOps position. 
      <br /><br />
      My goal was to ease developers' lives by automating the most repetitive operations from their work habits. 
      To do so, I analyzed every team requirements and tried to identify what slowed them down and what could improve the quality of their work. 
      I then though about solutions and challenged them with what our infrastructure could provide. 
      When necessary, I suggested upgrades to the infrastructure in order to provide the best services to the developers. 
      Finally, I documented all my work, shared it, and performed a follow-up of the deployment of the solutions inside of the company.
    `,
  },
  {
    title: "Software Test Engineer",
    company: "Sony",
    location: "Brussels",
    icon: "i-simple-icons-sony",
    iconWrapperClass: "bg-gray-950",
    from: 2018,
    to: 2019,
    description: `
      I was in charge of designing, implementing and performing test strategies for Sony internal software. 
      <br /><br />
      Through this position, I have been involved in various projects, which helped me to get a good picture of what the company does.
      While I improved the test coverage and the test reporting, I also automated most of the operations.
      As an outcome, it increased the overall software quality and reliability.
    `,
  },
  {
    title: "Software Test Engineer",
    company: "IBA",
    location: "Louvain-la-Neuve",
    icon: "~/assets/img/iba.svg",
    iconClass: "size-10",
    iconWrapperClass: "bg-[#69BE28]",
    from: 2016,
    to: 2018,
    description: `
      I worked for almost 2 year as a Software Test Engineer in the Beam Management System department of the R&D.
      <br /><br /> 
      This experience taught me how to comply with medical requirements. In such a field, software must be tested 
      rigorously in order to pass the audits that occur several time a year. I used to be the middleman between the 
      requirement engineers and software engineers.
    `,
  },
  {
    title: "Computer Science degree",
    company: "EPHEC",
    location: "Louvain-la-Neuve",
    icon: "~/assets/img/ephec.svg",
    iconWrapperClass: "bg-gray-100",
    from: 2012,
    to: 2015,
    description: `
      I acquired a bachelor degree in Computer Science, with a 'Magna cum laude' grade. 
      <br /><br />
      I learned the fundamentals of programming, databases, networking, electronics and project management. 
      <br /><br />
      But most important : I learned how to learn.
    `,
  },
]
</script>

<style scoped></style>
