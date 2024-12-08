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
          href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
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
