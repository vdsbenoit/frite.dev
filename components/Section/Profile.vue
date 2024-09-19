<template>
  <section class="flex min-h-screen items-start justify-center pb-24 md:pb-0 lg:items-center">
    <div class="mt-2 max-w-screen-lg px-3 sm:mt-0 sm:px-6 xl:px-0">
      <div class="grid grid-cols-7 gap-4">
        <!-- 1st block -->
        <div
          class="col-span-2 flex flex-col items-center self-center sm:row-span-3 sm:gap-y-2 sm:self-baseline"
        >
          <div
            class="via-primary max-h-32 max-w-32 rounded-full bg-gradient-to-r from-gray-900 to-red-400 p-0.5 sm:max-h-48 sm:max-w-48"
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

        <!-- 2nd block -->
        <div class="col-span-5 self-center leading-none sm:leading-tight">
          <span class="font-bold">Hi, I am</span><br />
          <h2 class="leading-none tracking-tight">Benoit</h2>
        </div>

        <!-- 3rd block -->
        <div class="col-span-7 sm:col-span-5">
          <p>
            I am a
            <span class="decoration-primary underline underline-offset-2"
              >freelance developer.</span
            >
            I find solutions to business issues using technology. I have more than
            <span class="decoration-primary underline underline-offset-2"
              >{{ workTimeYears }} years of experience</span
            >
            in software development, testing, automation and DevOps. I have worked in
            <span class="decoration-primary underline underline-offset-2">various industries</span>
            such as health, education, entertainment and new technologies.
          </p>
        </div>
        <SocialLinks class="col-span-7 flex justify-center gap-x-11 sm:hidden" />
        <div class="col-span-7 sm:col-span-5">
          <WorkExperience
            title="Freelance Developer"
            company="frite.dev"
            location="Brussels"
            icon="~/assets/img/company-logo.png"
            icon-class="size-7"
            icon-wrapper-class="bg-gray-950"
            :from="2024"
            description="
            In 2024, I decided to start working on my own and I created frite.dev.
            <br /><br />
            I provide services in software development, testing, automation and DevOps.
            My expertise lies in leveraging technology to solve business challenges.
            "
          />
          <WorkExperience
            title="DevOps Engineer"
            company="Sony"
            location="Brussels"
            icon="i-simple-icons-sony"
            icon-wrapper-class="bg-gray-950"
            :from="2019"
            :to="2024"
            description="
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
            "
          />
          <WorkExperience
            title="Software Test Engineer"
            company="Sony"
            location="Brussels"
            icon="i-simple-icons-sony"
            icon-wrapper-class="bg-gray-950"
            :from="2018"
            :to="2019"
            description="
            I was in charge of designing, implementing and performing test strategies for Sony internal software. 
            <br /><br />
            Through this position, I have been involved in various projects, which helped me to get a good picture of what the company does.
            While I improved the test coverage and the test reporting, I also automated most of the operations.
            As an outcome, it increased the overall software quality and reliability."
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
            description="
            I worked for almost 2 year as a Software Test Engineer in the Beam Management System department of the R&D.
            <br /><br /> 
            This experience taught me how to comply with medical requirements. In such a field, software must be tested 
            rigorously in order to pass the audits that occur several time a year. I used to be the middleman between the 
            requirement engineers and software engineers."
          />
          <WorkExperience
            title="Computer Science degree"
            company="EPHEC"
            location="Louvain-la-Neuve"
            icon="~/assets/img/ephec.svg"
            icon-wrapper-class="bg-gray-100"
            :from="2012"
            :to="2015"
            description="
            I acquired a bachelor degree in Computer Science, with a 'Magna cum laude' grade. 
            <br /><br />
            I learned the fundamentals of programming, databases, networking, electronics and project management. 
            <br /><br />
            But most important : I learned how to learn.
            "
          />
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
</script>

<style scoped></style>
