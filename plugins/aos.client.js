import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 1000, // Animation duration (default is 400ms)
      easing: "ease-in-out", // Animation easing
      // once: true, // Whether animation should happen only once
    });
  }
});
