<template>
  <div class="flex min-h-screen items-center justify-center">
    <div>
      <div id="background-clip" :style="{ clipPath }"></div>
      <h1 ref="heroTitle" class="relative mt-3 px-0.5 text-center font-bold tracking-tight sm:px-2">
        <span
          class="anim-bring-in block bg-gradient-to-t from-gray-400 to-white bg-clip-text text-[28px] text-transparent sm:text-5xl sm:leading-tight"
        >
          Empower your business
        </span>
        <div class="flex w-full justify-center">
          <div>
            <div
              class="typewriter-effect bg-gradient-to-t from-gray-400 to-white bg-clip-text text-lg text-transparent sm:text-3xl"
            >
              with tailored
              <span class="decoration-primary underline underline-offset-4">
                software solutions</span
              >
            </div>
          </div>
        </div>
      </h1>
      <div
        class="focus:*:ring-primary-200 mt-8 grid grid-cols-1 justify-items-center gap-2 font-semibold *:w-48 *:rounded-lg *:py-2 *:text-center *:shadow-xl *:transition *:ease-in focus:*:outline-none focus:*:ring-2 motion-safe:hover:*:scale-110 sm:grid-cols-2 sm:justify-normal sm:gap-4 sm:*:w-52"
      >
        <a
          href="#profile"
          class="bg-primary-400 hover:bg-primary-300 active:bg-primary-500 inline-block text-gray-800 sm:justify-self-end"
        >
          Who I am
        </a>
        <a
          href="#contact"
          class="inline-block border border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700 active:bg-gray-900 sm:justify-self-start"
        >
          Let's talk
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElementBounding } from "@vueuse/core"

// Props

const props = defineProps<{
  isActive: boolean
}>()

const heroTitle = ref<HTMLInputElement | null>(null)
const heroTitleRect = useElementBounding(heroTitle)

const clipPath = computed(() => {
  if (!heroTitleRect.left.value) return ""
  return `polygon(${heroTitleRect.left.value}px ${heroTitleRect.top.value}px, ${heroTitleRect.right.value}px ${heroTitleRect.top.value}px, ${heroTitleRect.right.value}px ${heroTitleRect.bottom.value}px, ${heroTitleRect.left.value}px ${heroTitleRect.bottom.value}px)`
})
</script>

<style scoped>
#background-clip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #262626 0%, #0a0a0a 100%);
  z-index: -1;
}
@keyframes bringIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
    padding: 0 5px 0 0;
  }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #f5f5f5;
  }
}

.anim-bring-in {
  animation: bringIn 1s;
}

/* Credits : https://css-tricks.com/snippets/css/typewriter-effect/ */
.typewriter-effect {
  overflow: hidden;
  border-right: 0.15em solid transparent;
  white-space: nowrap;
  margin: 0 auto;
  /* letter-spacing: .15em; */
  animation:
    typing 2s steps(30, end) both,
    blink-caret 0.75s step-end infinite;
  animation-delay: 0.8s;
}
@media (prefers-reduced-motion) {
  .anim-bring-in {
    animation: none;
  }
  .typewriter-effect {
    animation: none;
  }
}
</style>
