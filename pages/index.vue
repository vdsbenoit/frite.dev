<!-- This page contains the nav bar & instantiate the different sections -->
<template>
  <div>
    <header
      class="relative left-0 right-0 top-0 z-20 items-center sm:fixed sm:top-8 sm:grid sm:grid-flow-col sm:grid-cols-5 sm:justify-items-center"
    >
      <div
        class="hidden cursor-pointer items-center sm:flex"
        @click.prevent="scrollTo('hero')"
      >
        <img
          src="~/assets/img/frites.png"
          alt="frites-logo"
          class="mr-2 size-8 md:size-10"
        />
        <a
          href="#hero"
          class="decoration-primary bg-gray-950 text-lg font-bold underline-offset-2 transition-colors hover:text-gray-100 focus:underline focus:outline-none md:text-xl"
          >frite.dev</a
        >
      </div>
      <div class="hidden sm:block"></div>
      <nav
        class="via-primary bg-gradient-to-r from-gray-700 to-red-400 pb-0.5 sm:rounded-xl sm:bg-gradient-to-br sm:p-0.5"
      >
        <div
          class="flex items-center justify-between bg-gray-800 px-4 py-2 text-gray-100 sm:gap-x-5 sm:rounded-xl sm:px-5 sm:py-1 sm:hover:text-gray-500"
        >
          <div
            class="flex cursor-pointer items-center sm:hidden"
            @click.prevent="scrollTo('hero')"
          >
            <img
              src="~/assets/img/frites.png"
              alt="frites-logo"
              class="mr-2 size-8"
            />
            <a
              href="#hero"
              class="decoration-primary text-lg font-bold transition-colors hover:text-gray-100 focus:underline focus:underline-offset-2 focus:outline-none"
              >frite.dev</a
            >
          </div>
          <a
            v-for="section in SECTIONS"
            :key="section.id"
            :href="`#${section.id}`"
            @click.prevent="scrollTo(section.id)"
            :class="{
              'text-primary': currentSection === section.id,
              hidden: section.id === 'hero',
            }"
            class="decoration-primary transition-colors hover:text-gray-100 focus:underline focus:underline-offset-2 focus:outline-none"
            >{{ section.title }}</a
          >
        </div>
      </nav>
      <div class="hidden sm:block"></div>
      <UToggle
        v-model="showStars"
        size="lg"
        off-icon="i-tdesign-animation-1"
        on-icon="i-tdesign-animation-1"
        class="hidden sm:inline-flex"
      />
    </header>
    <main ref="scrollableContent" class="h-lvh overflow-y-auto">
      <section
        v-for="section in SECTIONS"
        :key="section.id"
        class="flex min-h-screen items-center justify-center"
      >
        <component
          :id="section.id"
          :is="section.component"
          v-intersection-observer="[
            onIntersectionObserver,
            INTERACTION_OBSERVER_OPTIONS,
          ]"
        />
      </section>
    </main>
    <div
      class="fixed bottom-6 right-6 flex size-10 cursor-pointer items-center justify-center rounded-full shadow shadow-gray-400/50 transition-colors active:shadow-none sm:hidden"
      :class="{ 'bg-primary-400': showStars, 'bg-gray-800': !showStars }"
      @click="toggleShowStars"
    >
      <UIcon
        name="i-tdesign-animation-1"
        class="size-5 transition-colors"
        :class="{ 'bg-primary-400': !showStars, 'bg-gray-800': showStars }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hero from "../components/Section/Hero.vue";
import Profile from "../components/Section/Profile.vue";
import Skills from "../components/Section/Skills.vue";
import Contact from "../components/Section/Contact.vue";
import { useEventListener } from "@vueuse/core";
import { vIntersectionObserver } from "@vueuse/components";

// Variables & Constants

const SECTIONS = [
  { id: "hero", title: "Home", component: Hero },
  { id: "profile", title: "Profile", component: Profile },
  { id: "skills", title: "Skills", component: Skills },
  { id: "contact", title: "Contact", component: Contact },
];

const currentSection = ref<string>("");
const scrollableContent = ref<HTMLElement | null>(null);
const blurBackground = useState("blurBackground");
const showStars = useState<boolean>("showStars");

const INTERACTION_OBSERVER_OPTIONS = {
  root: scrollableContent,
  threshold: 0.5,
};

// Methods

const handleScroll = () => {
  if (!scrollableContent.value) return;
  blurBackground.value =
    scrollableContent.value.scrollTop > window.innerHeight / 4;
};

const toggleShowStars = () => {
  showStars.value = !showStars.value;
};

const scrollTo = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId);
  if (targetElement && scrollableContent.value) {
    scrollableContent.value.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

const onIntersectionObserver = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentSection.value = entry.target.id;
    }
  });
};

// Lifecycle Hooks

onMounted(() => {
  useEventListener(scrollableContent, "scroll", handleScroll);
});
</script>
<style scoped></style>
