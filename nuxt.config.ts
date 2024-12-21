// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable SSR (use SPA mode)

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
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap",
        },
      ],
    },
  },
});
