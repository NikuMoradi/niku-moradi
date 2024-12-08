/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
      },
      borderRadius: {
        "4xl": "3rem", // Custom rounded size
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(15deg, rgb(143, 86, 204), rgb(93, 78, 196))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
