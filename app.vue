<template>
  <NuxtLayout>
    <SectionHero id="hero" />
    <SectionProfile id="profile" />
    <SectionSkills id="skills" />
    <SectionContact id="contact" />
  </NuxtLayout>
</template>
<script setup lang="ts">
const scrollToSection = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const sectionId = target.getAttribute("href");
  if (sectionId) {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

onMounted(() => {
  // Add click event listener to all anchor tags
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", scrollToSection);
  });
});
</script>
