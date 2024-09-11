import yaml from "@rollup/plugin-yaml";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/test-utils/module"],
  vite: { plugins: [yaml()] },
  typescript: { tsConfig: { include: ["types"] }, typeCheck: true },
  colorMode: {
    preference: "dark",
  },
  app: {
    head: {
      title: "frite.dev • Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "frite.dev offers top-notch software development services for web applications and SaaS.",
        },
      ],
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
