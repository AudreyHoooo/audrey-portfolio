// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', '@nuxt/fonts'],
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        class: 'scroll-smooth',
      },
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  compatibilityDate: '2024-08-05',
})
