// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  // runtimeConfig: {
  //   public: {
  //     disableHints: true, // This suppresses runtime hints like unused pages warnings
  //   },
  // },
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
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap",
        },
      ],
    },
  },
});

//
// export default defineNuxtConfig({
//   compatibilityDate: "2024-11-01",
//   devtools: { enabled: true },
//   app: {
//     head: {
//       title: "My Nuxt App",
//       meta: [{ name: "description", content: "This is my Nuxt app!" }],
//       link: [
//         { rel: "icon", href: "/favicon.ico" },
//       ],
//       script: [
//         {
//           src: "https://cdn.tailwindcss.com",
//           defer: true,
//         },
//       ],
//     },
//   },
// });
