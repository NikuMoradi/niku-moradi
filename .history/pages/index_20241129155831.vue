<template>
  <div class="w-full h-[50vh] flex flex-col justify-left p-10 text-gray-50">
    <p>Hi my new friend!</p>
    <h1 class="text-5xl font-bold tracking-wide leading-normal">
      Discover my art space!
    </h1>
    <p>I am a <span id="dynamicText"></span></p>
  </div>
</template>
<script>
import Typed from "typed.js";

export default {
  mounted() {
    const options = {
      strings: ["Designer", "Developer", "Creator"],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    };

    new Typed("#dynamicText", options);
  },
};
</script>

<style></style>
