<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div>
      <h2 class="mb-8 text-left text-5xl font-bold">Skills</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 class="mb-4 text-xl font-semibold">Hard skills</h3>
          <div class="space-y-4">
            <Skill
              v-for="skill in skills.hard"
              :key="skill.title"
              :title="skill.title"
              :icon="skill.icon"
              :description="skill.description"
              :color="skill.color"
            />
          </div>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-semibold">Technologies</h3>
          <div class="space-y-4">
            <Skill
              v-for="skill in skills.technologies"
              :key="skill.title"
              :title="skill.title"
              :icon="skill.icon"
              :description="skill.description"
              :color="skill.color"
            />
          </div>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-semibold">Soft skills</h3>
          <div class="space-y-4">
            <Skill
              v-for="skill in skills.soft"
              :key="skill.title"
              :title="skill.title"
              :icon="skill.icon"
              :description="skill.description"
              :color="skill.color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const skills = {
  hard: [
    // 50 word lorem ipsum :
    {
      title: "JavaScript",
      icon: "i-simple-icons-javascript",
      color: "#f7df1e",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Python",
      icon: "i-simple-icons-python",
      color: "#306998",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  technologies: [
    {
      title: "Vue.js",
      icon: "i-simple-icons-vuedotjs",
      color: "#4FC08D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Tailwind",
      icon: "i-simple-icons-tailwindcss",
      color: "#06b6d4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  soft: [
    {
      title: "Communication",
      icon: "i-heroicons-chat-bubble-oval-left",
      color: "#0284c7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Teamwork",
      icon: "i-heroicons-user-group-16-solid",
      color: "#f43f5e",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};
</script>

<style scoped></style>
