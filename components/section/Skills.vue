<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div>
      <h2 class="mb-8 text-left text-5xl font-bold">Skills</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 class="mb-4 text-xl font-semibold">Hard skills</h3>
          <div class="space-y-4">
            <!-- <Skill
              v-for="skill in skills.hard"
              :key="skill.title"
              :id="
                skill.title.toLowerCase().replace(' ', '-').replace('/', '-')
              "
              :title="skill.title"
              :icon="skill.icon"
              :description="skill.description"
              :color="skill.color"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const categories = [
  {
    title: "Skills",
    subcategories: [
      {
        title: "Hard skills",
        skills: [
          {
            title: "Full-stack development",
            icon: "i-heroicons-globe-24-solid",
            color: "#f59e0b",
            description:
              "I have experience in building full-stack applications using various technologies. \
    My prefered stack right now being Vue, Nuxt, Tailwind and serverless backend services like Firebase.",
          },
          {
            title: "Project management",
            icon: "i-heroicons-calendar-24-solid",
            color: "#f59e0b",
            description:
              "I used to the the head of a non-profit organization and was responsible for managing the project and the team. \
    This non-profit organization was organizing a yearly event with over 1000 participants.",
          },
          {
            title: "DevOps",
            icon: "i-heroicons-chart-pie-24-solid",
            color: "#f59e0b",
            description:
              "I worked as a DevOps engineer for 5 year at Sony, and was promoted to the position of Senior DevOps Engineer. \
    As a DevOps, I analyze the established software lifecyle, identify its flaws and optimize it with the state-of-the-art technologies.",
          },
          {
            title: "CI/CD",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "Through my career as a DevOps, I acquired a lot of experience in creating and maintaining fully-automated \
    software integration and delivery.",
          },
          {
            title: "Package management",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "My previous DevOps position also gave me the oppotunity to sharpen my knowledge with package management tools, including conda (python) and conan (C/C++).",
          },
          {
            title: "Software Testing",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "My first professional experience was as a software tester for a medical device company. \
    I have a good understanding of the software testing process and have experience with various testing tools. \
    I wrote hundreds of test cases, both automated and manual. \
    I performed on-site validation campaigns and wrote validation reports.",
          },
          {
            title: "Quality Assurance",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "My first professional experience was for a company that produces medical devices. \
    Hence, the quality of the software was crucial. \
    I learned a lot about quality assurance (including requirement management) and how to ensure high quality of the software. \
    For the records: my end of study thesis was about a quality assurance tool that I made from scratch and was tailored to the needs of this company.",
          },
          {
            title: "Agile",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "As most the software engineering companies today, the companies I worked for were using Agile methodologies.",
          },
          {
            title: "Waterfall",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "Even though it isn't my prefered methodology, I have experience with the Waterfall methodology too.",
          },
        ],
      },
      {
        title: "Soft skills",
        skills: [
          {
            title: "Supreme communication",
            icon: "i-heroicons-chat-bubble-oval-left",
            color: "#0284c7",
            keywords: "ask, understand, break down, propose, explain, document",
            description:
              "I have excellent communication skills. \
        I am able to break down complex problems and clearly explain them to people with fewer technical knowledge. \
        I am a good listener, I take the necessary time to understand the needs of my collaborators. \
        I always document my work to ensure that others can understand it.",
          },
          {
            title: "End-user focus",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "High end-user focus is crucial for solving problems effectively.\
        By thoroughly understanding the user requirements, I can tailor solutions that enhance their experience. \
        With this approach, I ensure my decisions are user-centric, leading to more impactful outcomes.",
          },
          {
            title: "Problem solving",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "I have a strong problem-solving mindset. \
        I enjoy tackling complex problems and finding innovative solutions. \
        I am not afraid to take risks and try new approaches to solve problems. \
        I never give up and always strive to find the best solution.",
          },
          {
            title: "Teamwork",
            icon: "i-heroicons-user-group-16-solid",
            color: "#f43f5e",
            description:
              "I am a good team player and I enjoy working with others. \
        I am always willing to help my teammates and share my knowledge with them. \
        I believe that teamwork is essential for success. By working together, we can achieve great things.",
          },
          {
            title: "Evidence-based decision making",
            icon: "i-heroicons-lightbulb-idea-24-solid",
            color: "#f59e0b",
            description:
              "In order to make the best decisions, I rely on evidence. \
          It helps me to make informed decisions and avoid making decisions based on assumptions.\
          I also use data to evaluate the impact of my decisions and make adjustments as needed.",
          },
        ],
      },
    ],
  },
  {
    title: "Technologies",
    subcategories: [
      {
        title: "Code",
        skills: [
          {
            title: "Vue",
            icon: "i-simple-icons-vuedotjs",
            color: "#4FC08D",
            description:
              "Vue is my prefered front-end framework at the moment. \
    Even though React is more popular, Vue is one of the most stable frameworks, which a solid community. \
    I appreciate the way Vue manage reactivity and the separation of concerns.",
          },
          {
            title: "Tailwind",
            icon: "i-simple-icons-tailwindcss",
            color: "#06b6d4",
            description:
              "As for most of the front-end developers today, Tailwind has become my favorite CSS framework. \
    It provides a set of pre-defined classes that can be used to style your components, making it easier to create consistent and responsive designs.",
          },
          {
            title: "Nuxt",
            icon: "i-simple-icons-django",
            color: "#092e20",
            description: "",
          },
          {
            title: "Ionic",
            icon: "i-simple-icons-ionic",
            color: "#3880ff",
            description: "",
          },
          {
            title: "Python",
            icon: "i-simple-icons-python",
            color: "#306998",
            description: "",
          },
          {
            title: "JavaScript",
            icon: "i-simple-icons-javascript",
            color: "#f7df1e",
            description: "",
          },
        ],
      },
      {
        title: "DevOps",
        skills: [
          {
            title: "Docker",
            icon: "i-simple-icons-javascript",
            color: "#f7df1e",
            description:
              "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. \
    In one of my previous professional experiences, I used Docker to containerize all the possible build environments of the company's software. \
    I used to maintain all of these Docker images programmatically, with the best DevOps automation practices. \
    It allowed the company to have a wide range of consitent build environments, available across all the developers' machines and the CI/CD servers.",
          },
          {
            title: "GitLab",
            icon: "i-simple-icons-javascript",
            color: "#f7df1e",
            description:
              "GitLab is a web-based DevOps lifecycle tool that provides a Git repository manager providing wiki, issue-tracking and CI/CD pipeline features, using an open-source license, developed by GitLab Inc. \
    I deployed and maintained a GitLab server for multiple years in one of my previous professional experiences. \
    Hence, I have a very good understanding of most of GitLab features.",
          },
          {
            title: "Git",
            icon: "i-simple-icons-git",
            color: "#f34f29",
            description:
              "Git is a distributed version control system. \
    I intensively use it on every project. Hence, I have a very good understanding of Git and its CLI.",
          },
          {
            title: "conda",
            icon: "i-simple-icons-conda",
            color: "#4eb33d",
            description:
              "Conda is a package manager for Python. Compared to pip, it provides a built-in environments manager. \
    I used to create and use conda packages with the internal dependencies in one of my previous professional experiences",
          },
          {
            title: "conan",
            icon: "i-simple-icons-conan",
            color: "#4eb33d",
            description:
              "Conan is a C/C++ package manager. \
    In one of my past professional experiences, I helped a company to package their C/C++ internal dependencies into conan packages. \
    It allowed the company to manage their dependencies more efficiently and enable better automation of their Software Development Life Cycle.",
          },
          {
            title: "CMake",
            icon: "i-simple-icons-jenkins",
            color: "#d24939",
            description:
              "CMake is a powerfull cross-platform build system generator. \
    I used CMake in my previous professional experiences to manage the build process of C/C++ projects, alongside conan.",
          },
          {
            title: "C/C++",
            icon: "i-simple-icons-cplusplus",
            color: "#00599c",
            description:
              "C and C++ are two of the most widely used programming languages in the world. \
    While I am not an active C/C++ developer, I have a good understanding of the language and its ecosystem.\
    I studied system C during my bachelor and used to work with C/C++ projects in my previous professional experiences.",
          },
          {
            title: "java",
            icon: "i-simple-icons-java",
            color: "#007396",
            description:
              "Java is one of the first programming languages I learned. \
    I used Java in my previous professional experiences. However, I haven't worked with Java for a while.",
          },
          {
            title: "maven",
            icon: "i-simple-icons-apachemaven",
            color: "#C71A36",
            description:
              "Maven is a build automation tool used primarily for Java projects. \
    I used Maven in my previous professional experiences to manage the compnay internal dependencies.",
          },
          {
            title: "Jira",
            icon: "i-simple-icons-jira",
            color: "#0052cc",
            description:
              "Jira is a project management tool that helps teams to plan, track, and manage their work. \
    I used Jira in my previous professional experiences to manage my projects and tasks.",
          },
          {
            title: "Firebase",
            icon: "i-simple-icons-firebase",
            color: "#f5820b",
            description:
              "Firebase is a BaaS (Back-end as a Service) platform developed by Google for creating mobile and web applications. \
    I used Firebase in my previous web development experiences to deploy severless web applications.",
          },
          {
            title: "GCP",
            icon: "i-simple-icons-googlecloud",
            color: "#4285f4",
            description:
              "Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products. \
    As Firebase is part of GCP, I also used GCP in my previous web development experiences to deploy serverless web applications.",
          },
          {
            title: "MongoDB",
            icon: "i-simple-icons-mongodb",
            color: "#47a248",
            description:
              "MongoDB is a NoSQL database program. \
    I used MongoDB in the past to store and manage data.",
          },
          {
            title: "MySQL",
            icon: "i-simple-icons-mysql",
            color: "#4479a1",
            description:
              "MySQL is an open-source relational database management system. \
    I learned SQL during my bachelor and used MySQL in the past to store and manage data.",
          },
          {
            title: "Prometheus",
            icon: "i-simple-icons-prometheus",
            color: "#e6522c",
            description:
              "Prometheus is an open-source monitoring and alerting toolkit. \
    I used Prometheus alongside Grafana in my previous professional experiences to monitor the performance of the software I was maintaining.",
          },
          {
            title: "Grafana",
            icon: "i-simple-icons-grafana",
            color: "#f46800",
            description:
              "Granafa is a multi-platform open-source analytics and interactive visualization web application. \
    I used Grafana alongside Prometheus in my previous professional experiences to monitor the performance of the software I was maintaining.",
          },
          {
            title: "Confluence",
            icon: "i-simple-icons-confluence",
            color: "#172b4d",
            description:
              "Confluence is a collaboration tool that helps teams to collaborate and share knowledge efficiently. \
    I used Confluence in my previous professional experiences to document my work and share it with my colleagues.",
          },
          {
            title: "Artifactory",
            icon: "i-simple-icons-jfrogartifactory",
            color: "#4285f4",
            description:
              "Artifactory is a universal artifact repository manager. \
    I used to maintain an Artifactory server in one of my previous professional experiences.",
          },
          {
            title: "Angular",
            icon: "i-simple-icons-angular",
            color: "#DD0031",
            description:
              "Angular is an open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. \
    I worked with Angular for a project in the past. Today, I prefer working with Vue, which provides cleaner code, hence better maintenability.",
          },
        ],
      },
    ],
  },
];
</script>

<style scoped></style>
