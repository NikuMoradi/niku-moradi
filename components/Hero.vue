<template>
  <section id="hero">
    <div class="w-full min-h-screen flex flex-col relative">
      <!--  SVG -->
      <div class="w-[30rem] absolute right-0 top-0 z-0">
        <img src="/assets/img/svg-top.svg " alt="Decorative" />
      </div>
      <div class="mt-[20rem] z-10">
        <!-- Banner Text for supported typed.js -->
        <p
          v-if="!showFallbackText"
          class="text-4xl 780:text-5xl font-bold bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          I'm a
          <span
            id="dynamicText"
            class="text-transparent bg-clip-text bg-custom-gradient"
          ></span>
        </p>
        <!-- Banner Text for not supported tuped.js -->
        <p
          v-if="showFallbackText"
          class="text-4xl font-bold bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          I am a Designer, Developer, Creator.
        </p>
      </div>
      <div class="h-2 mt-[2rem] z-10">
        <h1
          class="text-3xl leading-10 font-bold bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          Let's Make your ideas shine.
        </h1>
      </div>
      <div class="w-30 mt-40">
        <button
          class="py-2 px-6 text-lg border border-gray-400 rounded-3xl tracking-wide text-zinc-800 hover:opacity-80"
        >
          My Works
          <i class="fa-solid fa-cubes"></i>
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
        backSpeed: 50,
        loop: true,
      };

      new Typed("#dynamicText", options);
    } else {
      // Typed.js is not supported, show fallback text
      this.showFallbackText = true;
    }
  },
};
</script>
