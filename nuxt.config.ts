import yaml from "@rollup/plugin-yaml"
import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/test-utils/module",
    "@nuxt/eslint",
    "nuxt-security",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/fonts",
  ],
  vite: { plugins: [yaml()] },
  runtimeConfig: {
    public: {
      appVersion: process.env.npm_package_version || "unknown",
      contactFormToEmail: "benoit@frite.dev",
      emailjsUserPubKey: "v_5w2uNf_muKtiZ_h",
      emailjsServiceId: "service_eqtnwg3",
      emailjsTemplateId: "template_grzi0mc",
      // prettier-ignore
      googleSchedulerCalendarId: "AcZssZ19CN4i1EHDIxZhCyJPYHcCg8T_sj1NDkP_nJnxZw2Yf_NfkoFqIT2BuCl1xzH92dnHnkW4xLdJ",
      captchaSiteKey: "6Le_eE8qAAAAAPsyNWtWJZTulFsdQ98bOM2KiC3w",
    },
  },
  colorMode: {
    preference: "dark",
  },
  site: {
    url: "https://frite.dev",
    name: "frite.dev • Benoit's portfolio",
    description:
      "frite.dev is a software development company providing tailored solutions for businesses.",
    defaultLocale: "en",
  },
  schemaOrg: {
    identity: "Organization",
  },
  app: {
    head: {
      // Other meta items (title, locale, description) are auto-generated by NuxtSEO
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#0a0a0a" },
        {
          name: "viewport",
          content: "width=device-width, height=device-height, initial-scale=1",
        },
      ],
      link: [
        { rel: "manifest", href: "/site.webmanifest" },
        // icon link items are auto-generated by NuxtSEO
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
})
