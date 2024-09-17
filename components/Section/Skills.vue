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
        <h2 class="mb-2" :class="[animationClass(index)]">
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
const animationClass = (index: number) => {
  if (props.isActive) {
    return index % 2 === 0 ? "anim-show-left" : "anim-show-right";
  } else {
    return "anim-hide";
  }
};
</script>
<style scoped>
@keyframes animShowLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0) ease-in-out;
  }
}
@keyframes animShowRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0) ease-in-out;
  }
}

.anim-show-left {
  animation: animShowLeft 0.3s both;
}
.anim-show-right {
  animation: animShowRight 0.3s both;
}
/* anim-hide is defined globally in tailwind.css */

@media (prefers-reduced-motion) {
  .anim-show-left {
    animation: none;
  }
  .anim-show-right {
    animation: none;
  }
}
</style>
