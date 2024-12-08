<template>
  <section id="hero">
    <div class="w-full flex flex-col my-10" style="height: calc(100vh - 2rem)">
      <!--  SVG -->
      <div class="w-[30rem] h-[28rem] absolute right-0 top-0">
        <img src="/assets/img/svg-top.svg" alt="" />
      </div>
      <div class="mt-20">
        <p
          class="text-6xl font-bold leading-normal bg-text-transparent bg-clip-text bg-custom-gradient text-transparent mb-0"
        >
          I am a
          <span
            id="dynamicText"
            class="text-transparent bg-clip-text bg-custom-gradient"
          ></span>
        </p>
        <h1
          class="text-6xl font-bold leading-normal bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          Let's Make your ideas shine.
        </h1>
      </div>
      <div class="w-30 mt-10">
        <button
          class="py-3 px-7 text-lg border border-gray-400 rounded-3xl tracking-wide text-zinc-800 hover:opacity-80"
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
