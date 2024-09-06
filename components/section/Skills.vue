<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="relative max-w-screen-lg px-2">
      <div class="mt-4 py-4" v-for="section in sections" :key="section.id">
        <h2 class="text-left text-5xl font-bold">{{ section.title }}</h2>
        <div
          class="grid grid-cols-1 gap-4"
          :class="[`sm:grid-cols-${section.content.groups.length}`]"
        >
          <div
            v-for="group in section.content.groups"
            :key="`${group.id}-subsection`"
          >
            <h3 class="mb-4 mt-4 text-xl font-semibold">
              {{ group.title }}
            </h3>
            <div class="flex flex-wrap gap-1">
              <Skill
                v-for="skill in section.content.items.filter(
                  (item: any) => item.group === group.id,
                )"
                :key="skill.title"
                :id="skill.id"
                :title="skill.title"
                :icon="skill.icon ?? undefined"
                :description="skill.description"
                :color="skill.color ?? undefined"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import skills from "~/assets/skills.yaml";
import techs from "~/assets/techs.yaml";

const sections = [
  { title: "Skills", id: "skills-subsection", content: skills },
  { title: "Techologies", id: "techs-subsection", content: techs },
];
</script>
<style scoped></style>
