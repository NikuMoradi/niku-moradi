// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    { src: "~/plugins/aos.client.js", mode: "client" }, // Load AOS only on the client-side
  ],
  modules: ["nuxt-phosphor-icons"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      disableHints: true, // This suppresses runtime hints like unused pages warnings
    },
  },
  // pages: false, // Disable Nuxt's pages feature

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Niku Moradi",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap",
        },
      ],
    },
  },
});
