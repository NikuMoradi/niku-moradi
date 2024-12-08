<template>
  <div class="w-full h-[50vh] flex flex-col px-16 relative">
    <!--  SVG -->
    <div class="w-[30rem] h-[28rem] absolute right-0 top-0">
      <img src="/assets/img/svg-top.svg" alt="" />
    </div>
    <p>Hi my new friend!</p>
    <h1
      class="text-6xl font-bold tracking-wide leading-normal bg-gradient-to-br text-transparent bg-clip-text from-pink-300 to-violet-800"
    >
      Ready to bring your vision to life?
    </h1>
    <p class="text-lg font-medium">
      I am a
      <span
        id="dynamicText"
        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 font-bold"
      ></span>
    </p>
    <div class="w-30 mt-20">
      <button
        class="py-3 px-7 text-lg border border-gray-400 rounded-3xl tracking-wide text-zinc-800"
      >
        My Works
        <i class="fa-solid fa-cubes"></i>
      </button>
    </div>
  </div>
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
