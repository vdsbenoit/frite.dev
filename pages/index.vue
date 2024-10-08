<!-- This page contains the nav bar & instantiate the different section components -->
<template>
  <div>
    <header
      class="fixed left-0 right-0 top-0 z-30 items-center sm:top-8 sm:grid sm:grid-flow-col sm:grid-cols-5 sm:justify-items-center sm:px-6 xl:px-0"
    >
      <div
        class="group hidden cursor-pointer items-center sm:flex"
        @click.prevent="navigateTo('#hero')"
      >
        <img
          src="~/assets/img/logo-transparent.png"
          alt="company-logo"
          class="mr-1 size-8 md:size-10"
        />
        <a
          href="#hero"
          class="decoration-primary rounded bg-gray-950 px-2 py-0.5 text-lg font-bold transition-colors focus:underline focus:underline-offset-2 focus:outline-none group-hover:text-gray-400 md:text-xl"
        >
          frite.dev
        </a>
      </div>
      <div
        class="via-primary bg-gradient-to-r from-gray-700 to-red-400 pb-[1px] sm:col-start-3 sm:rounded-xl sm:bg-gradient-to-br sm:p-[1px]"
      >
        <nav
          class="flex items-center justify-evenly bg-gray-800 px-1 py-2 text-gray-100 sm:justify-between sm:gap-x-5 sm:rounded-xl sm:px-5 sm:py-1"
        >
          <div
            class="group flex cursor-pointer items-center sm:hidden"
            @click.prevent="navigateTo('#hero')"
          >
            <img src="~/assets/img/logo-transparent.png" alt="company-logo" class="mr-1 size-6" />
            <a
              href="#hero"
              class="decoration-primary font-bold transition-colors focus:underline focus:underline-offset-2 focus:outline-none group-hover:text-gray-400 sm:text-lg"
            >
              frite.dev
            </a>
          </div>
          <a
            v-for="section in SECTIONS"
            :key="section.id"
            :href="`#${section.id}`"
            :class="{
              'text-primary': currentSection === section.id,
              hidden: section.id === 'hero',
            }"
            class="decoration-primary text-sm transition-colors hover:text-gray-400 focus:underline focus:underline-offset-2 focus:outline-none sm:text-base"
          >
            {{ section.title }}
          </a>
        </nav>
      </div>
      <UToggle
        v-model="isStarsEnabled"
        name="toggleStarBackground"
        size="lg"
        off-icon="i-tdesign-animation-1"
        on-icon="i-tdesign-animation-1"
        class="hidden sm:col-start-5 sm:ml-20 sm:inline-flex"
      />
    </header>
    <main class="overflow-x-hidden">
      <component
        :is="section.component"
        v-for="section in SECTIONS"
        :id="section.id"
        :key="section.id"
        v-intersection-observer="[onIntersectionObserver, { threshold: 0.5 }]"
        :is-active="currentSection === section.id"
      />
    </main>
    <SectionFooter />
    <div
      id="star-toggle-fab"
      class="fixed bottom-6 right-6 flex size-10 cursor-pointer items-center justify-center rounded-full shadow shadow-gray-600/50 transition-colors active:shadow-none sm:hidden"
      :class="{ 'bg-primary-400': isStarsEnabled, 'bg-gray-800': !isStarsEnabled }"
      @click="toggleStars"
    >
      <UIcon
        name="i-tdesign-animation-1"
        class="size-5 transition-colors"
        :class="{ 'bg-primary-400': !isStarsEnabled, 'bg-gray-800': isStarsEnabled }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hero from "../components/Section/Hero.vue"
import Profile from "../components/Section/Profile.vue"
import Skills from "../components/Section/Skills.vue"
import Contact from "../components/Section/Contact.vue"
import { vIntersectionObserver } from "@vueuse/components"

// SEO config

defineOgImageComponent("FriteCustom")

// Variables & Constants

const SECTIONS = [
  { id: "hero", title: "Home", component: Hero },
  { id: "profile", title: "Profile", component: Profile },
  { id: "skills", title: "Skills", component: Skills },
  { id: "contact", title: "Contact", component: Contact },
]

const currentSection = ref<string>("")
const isStarsEnabled = useState<boolean>("isStarsEnabled", () => true)

// Methods

const toggleStars = () => {
  isStarsEnabled.value = !isStarsEnabled.value
}

const onIntersectionObserver = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentSection.value = entry.target.id
    }
  })
}
</script>
<style scoped></style>
