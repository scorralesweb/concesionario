// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/fonts.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  modules: ["nuxt-aos", "nuxt-gtag"],
  aos: {
    once: true,
    // useClassNames: true
  },
  runtimeConfig: {
    public: {
      baseURL: "https://www2.mercedes-benz.com.ar/api/",
    },
  },
  gtag: { id: "" },
});
