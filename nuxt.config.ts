// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
    payloadExtraction: true,
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/index"],
      ignore: ["/about"],
    },
  },
  routeRules: {
    "/api/hello": { isr: 60 },
  },
});
