// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@nuxt/fonts"],
  app: {
    head: {
      htmlAttrs: {
        class: "scroll-smooth",
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
})
