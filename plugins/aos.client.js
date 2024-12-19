import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.hook("app:mounted", () => {
      AOS.init({
        duration: 1000, // Animation duration (default is 400ms)
        easing: "ease-in-out", // Animation easing
        // once: true, // Uncomment if animation should happen only once
      });
    });
  }
});
