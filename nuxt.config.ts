import yaml from "@rollup/plugin-yaml"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/test-utils/module", "@nuxt/eslint", "nuxt-security"],
  vite: { plugins: [yaml()] },
  typescript: {
    typeCheck: "build",
    tsConfig: {
      include: ["types"],
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "~/*": ["./*"],
          "@/*": ["./*"],
        },
      },
    },
  },
  colorMode: {
    preference: "dark",
  },
  app: {
    head: {
      title: "frite.dev • Portfolio",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, height=device-height, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "frite.dev offers top-notch software development services for web applications and SaaS.",
        },
      ],
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp", //https://github.com/Baroshem/nuxt-security/issues/101
      contentSecurityPolicy: {
        "upgrade-insecure-requests": process.env.NODE_ENV === "development" ? false : true, // USE ONLY IN DEV MODE
      },
    },
    corsHandler: {
      origin: "*",
    },
  },
})
