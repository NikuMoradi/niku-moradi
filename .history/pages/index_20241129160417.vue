<template>
  <div class="w-full h-[50vh] flex flex-col justify-left p-10 text-gray-50">
    <p>Hi my new friend!</p>
    <h1 class="text-5xl font-bold tracking-wide leading-normal">
      Discover my art space!
    </h1>
    <p class="text-lg font-medium">
      I am a
      <span
        id="dynamicText"
        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 font-bold"
      ></span>
    </p>
  </div>
</template>
<script>
import Typed from "typed.js";

export default {
  mounted() {
    const options = {
      strings: [
        "<strong>Designer</strong>",
        "<strong>Developer</strong>",
        "<strong>Creative Mind</strong>",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: false, // Hide the blinking cursor
    };

    new Typed("#dynamicText", options);
  },
};
</script>

<style></style>
