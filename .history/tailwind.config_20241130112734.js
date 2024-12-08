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
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "4xl": "3rem", // Custom rounded size
      },
      colors: {
        primary: {
          DEFAULT: "#EEAEE3", // Solid color fallback
          gradient:
            "linear-gradient(90deg, rgba(238, 174, 227, 1) 0%, rgba(104, 10, 239, 1) 100%)",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
