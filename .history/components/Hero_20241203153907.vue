<template>
  <section id="hero">
    <div class="w-full min-h-screen flex flex-col relative">
      <!--  SVG -->
      <div class="w-[30rem] absolute right-0 top-0 z-0">
        <img src="/assets/img/svg-top.svg " alt="Decorative" />
      </div>
      <div class="mt-[17rem] z-10 space-y-3">
        <p
          class="text-5xl xl:text-6xl leading-[3rem] font-bold bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          I am a
          <span
            id="dynamicText"
            class="text-transparent bg-clip-text bg-custom-gradient"
          ></span>
        </p>
        <h1
          class="text-5xl xl:text-6xl font-bold bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          Let's Make your ideas shine.
        </h1>
      </div>
      <div class="w-30 mt-10">
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
  mounted() {
    const options = {
      strings: ["Designer", "Developer", "Creator"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    new Typed("#dynamicText", options);
  },
};
</script>
