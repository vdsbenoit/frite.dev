<template>
  <div
    class="flex min-h-screen items-start justify-center pb-16 md:pb-0 lg:items-center"
  >
    <div class="max-w-screen-lg px-3 sm:px-10">
      <div
        class="mb-6"
        v-for="(subSection, index) in content"
        :key="subSection.id"
      >
        <h2 class="mb-2">
          {{ subSection.title }}
        </h2>
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2"
          :class="[`md:grid-cols-${subSection.groups.length}`]"
        >
          <div
            v-for="group in subSection.groups"
            :key="`skill-${group.id}`"
            :id="`skill-${group.id}`"
          >
            <h3 class="mb-1">
              {{ group.title }}
            </h3>
            <div class="flex flex-wrap gap-1 py-2">
              <Skill
                v-for="skill in group.items"
                :key="`skill-${skill.id}`"
                :id="`skill-${skill.id}`"
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
import content from "~/assets/skills.yaml";
// Props
const props = defineProps<{
  isActive: boolean;
}>();
</script>
<style scoped></style>
