<template>
  <div
    class="flex justify-center items-center min-h-screen px-4 space-x-8 relative"
  >
    <!-- SVG Background -->
    <div id="svgBackground" class="absolute top-0 right-0 bottom-0 left-0">
      <!-- Top SVG -->
      <div class="bg-image"></div>
      <!-- Bottom SVG -->
      <div class="w-50 h-50 bg-black absolute bottom-0 left-0">kmlk</div>
    </div>

    <!-- Left Panel -->
    <LeftPanel />

    <!-- Fixed Width Centered Card -->
    <div
      class="w-full max-w-5xl overflow-hidden z-10"
      style="height: calc(100vh - 40px)"
    >
      <!-- Scrollable Content -->
      <div class="overflow-y-auto h-full scrollbar-hide">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #e6ebf4;
}

/* Ensure the background covers the entire screen */

/* Custom Scroll Effect */
html,
body {
  scroll-behavior: smooth;
}
.bg-imagee {
  position: absolute;
  top: 0;
  right: 0;
  height: 20rem;
  width: 20rem;
  border-radius: 100%;
  background: rgb(193, 178, 244);
  background: linear-gradient(
    30deg,
    #c1b2f4 15%,
    rgba(242, 241, 245, 1) 43%,
    rgba(252, 250, 255, 0.23021708683473385) 100%
  );
  filter: drop-shadow(0 0 30px rgba(193, 178, 244, 0.6)); /* محو اطراف */
}
.bg-image {
  position: absolute;
  top: 0;
  right: 0;
  height: 25rem; /* Adjust for closer match */
  width: 25rem; /* Adjust for closer match */
  border-radius: 50%; /* Ensures it's a perfect circle */
  background: radial-gradient(
    circle,
    rgba(193, 178, 244, 1) 30%,
    rgba(242, 241, 245, 1) 70%
  ); /* Modified gradient */
  filter: blur(60px) brightness(1.1); /* Adds subtle glow effect */
}

/* You may add more styling as needed for the other elements */
</style>
