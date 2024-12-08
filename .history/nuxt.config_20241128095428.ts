// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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
