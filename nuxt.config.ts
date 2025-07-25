// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],

  colorMode: {
    preference: "light",
  },

  ssr: false,
  compatibilityDate: "2024-12-22",
});