<template>
  <div class="w-full h-[50vh] flex flex-col justify-left px-16 relative">
    <!--  SVG -->
    <div class="w-[30rem] h-[28rem] absolute right-0 top-0">
      <img src="/assets/img/svg-top.svg" alt="" />
    </div>
    <p>Hi my new friend!</p>
    <h1
      class="text-5xl font-bold tracking-wide leading-normal bg-gradient-to-br text-transparent bg-clip-text from-pink-300 to-violet-600"
    >
      Discover my art space!
    </h1>
    <p class="text-lg font-medium">
      I am a
      <span
        id="dynamicText"
        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 font-bold"
      ></span>
    </p>
    <div class="w-30 text-right">
      <button
        class="bg-lime-300 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded"
      >
        Explore My Work
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
