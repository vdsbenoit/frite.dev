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
import yaml from 'js-yaml';
const { data } = await useFetch('/assets/skills.yaml');
const skills = computed(() => {
  return yaml.load(data.value as string)
})

</script>

<style scoped></style>
