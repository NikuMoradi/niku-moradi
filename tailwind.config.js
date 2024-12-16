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
    screens: {
      640: "640px", // Small screens and up
      780: "780px", // Add your custom breakpoint
      1000: "1000px", // Medium screens and up
      1040: "1040px", // Medium screens and up
      1180: "1180px", // Large screens and up
      1260: "1260px", // Extra-large screens and up
    },

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
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
