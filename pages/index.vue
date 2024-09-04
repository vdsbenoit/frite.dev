<template>
  <div class="">
    <nav class="realtive left-0 right-0 top-0 z-10 sm:fixed sm:top-8 sm:flex">
      <div
        class="via-primary bg-gradient-to-r from-gray-700 to-red-400 pb-0.5 sm:mx-auto sm:rounded-xl sm:bg-gradient-to-br sm:p-0.5"
      >
        <div
          class="flex items-center justify-between bg-gray-800 px-4 py-2 text-gray-100 sm:gap-x-4 sm:rounded-xl sm:px-3 sm:py-1 sm:hover:text-gray-500"
        >
          <div class="flex items-center sm:hidden">
            <img
              src="~/assets/img/frites.png"
              alt="frites-logo"
              class="mr-2 h-8 w-8"
            />
            <a
              href="#hero"
              class="decoration-primary text-lg font-bold underline-offset-2 transition-colors hover:text-gray-100 focus:underline focus:outline-none"
              >frite.dev</a
            >
          </div>
          <a
            v-for="section in SECTIONS"
            :key="section.id"
            :href="`#${section.id}`"
            :class="{
              'text-primary': currentSection === section.id,
              hidden: section.id === 'hero',
            }"
            class="decoration-primary underline-offset-2 transition-colors hover:text-gray-100 focus:underline focus:outline-none"
            >{{ section.title }}</a
          >
        </div>
      </div>
    </nav>
    <main ref="scrollableContent" class="h-lvh overflow-y-auto">
      <div v-for="section in SECTIONS" :key="section.id">
        <component :id="section.id" :is="section.component" />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Hero from "../components/Section/Hero.vue";
import Profile from "../components/Section/Profile.vue";
import Skills from "../components/Section/Skills.vue";
import Contact from "../components/Section/Contact.vue";

// Constants

const SECTIONS = [
  { id: "hero", title: "Home", component: Hero },
  { id: "profile", title: "Profile", component: Profile },
  { id: "skills", title: "Skills", component: Skills },
  { id: "contact", title: "Contact", component: Contact },
];

// Reactive variables

const currentSection = ref<string>("");
const scrollableContent = ref<HTMLElement | null>(null);
const blurBackground = useState("blurBackground");

// Methods

const handleScroll = () => {
  if (!scrollableContent.value) return;
  blurBackground.value =
    scrollableContent.value.scrollTop > window.innerHeight / 4;
};

// Lifecycle Hooks

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 },
  );

  SECTIONS.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });
  if (scrollableContent.value) {
    scrollableContent.value.addEventListener("scroll", handleScroll);
  }

  onUnmounted(() => {
    observer.disconnect();
    if (scrollableContent.value) {
      scrollableContent.value.removeEventListener("scroll", handleScroll);
    }
  });
});
</script>
<style scoped></style>
