<template>
  <div>
    <WorkExperienceItem
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
</template>

<script lang="ts" setup>
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
      As of 2024, I work on my own as a freelance software engineer, and created frite.dev.
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
