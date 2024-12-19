<template>
  <section id="hero">
    <div class="w-full min-h-screen flex flex-col relative">
      <!--  SVG -->
      <div
        class="w-[30rem] absolute right-0 top-0 z-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        <img src="/assets/img/svg-top.svg " alt="Decorative" />
      </div>
      <div class="mt-[20rem] z-10">
        <!-- Banner Text for supported typed.js -->
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          v-if="!showFallbackText"
          class="text-4xl 780:text-5xl font-bold bg-clip-text text-color-light text-transparent dark:text-color-dark"
        >
          I'm a
          <span id="dynamicText" class=""></span>
        </p>
        <!-- Banner Text for not supported tuped.js -->
        <p
          v-if="showFallbackText"
          class="text-4xl font-bold bg-clip-text text-color-light text-transparent dark:text-color-dark"
        >
          I am a Designer, Developer, Creator.
        </p>
      </div>
      <div
        class="h-2 mt-[2rem] z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          class="text-3xl leading-10 font-bold bg-clip-text text-color-light text-transparent dark:text-color-dark"
        >
          Let's Make your ideas shine.
        </h1>
      </div>
      <div
        class="w-30 mt-40"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <button
          @click="scrollToProjects"
          class="flex items-center space-x-2 py-4 w-full justify-center 640:w-auto 640:py-3 640:px-5 text-md border border-gray-400 dark:border-[#303033] rounded-3xl tracking-wide text-gray-800 dark:text-slate-200 font-bold hover:opacity-80"
        >
          <span>My Works</span>
          <PhosphorIconSquaresFour :size="20" weight="bold" />
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import Typed from "typed.js";

export default {
  data() {
    return {
      showFallbackText: false, // Controls the visibility of the fallback text
    };
  },
  mounted() {
    // Check if Typed.js is available
    if (typeof Typed !== "undefined") {
      // Typed.js is supported, initialize it
      const options = {
        strings: ["Designer", "Developer", "Creator"],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 2000, // Delay before starting the loop (in milliseconds)
        loop: true,
      };

      new Typed("#dynamicText", options);
    } else {
      // Typed.js is not supported, show fallback text
      this.showFallbackText = true;
    }
  },
  methods: {
    scrollToProjects() {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
