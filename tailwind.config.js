/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode via a class
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
      360: "360px",
      640: "640px",
      780: "780px",
      1000: "1000px",
      1040: "1040px",
      1180: "1180px",
      1260: "1260px",
      1280: "1280px",
    },

    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
      },
      borderRadius: {
        "4xl": "3rem", // Custom rounded size
      },
      // backgroundImage: {
      //   "custom-gradient-1":
      //     "linear-gradient(15deg, rgb(143, 86, 204), rgb(93, 78, 196))",
      //   "custom-gradient-2":
      //     "linear-gradient(180deg, rgba(225,186,198,1) 0%, rgba(210,193,229,1) 100%)",
      // },
      scale: {
        102: "1.02",
      },
      colors: {
        // Add your custom color
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
