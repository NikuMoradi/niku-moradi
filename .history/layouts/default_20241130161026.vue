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
.bg-image {
  position: absolute;
  top: 0;
  right: 0;
  height: 22rem; /* Matching the approximate size */
  width: 22rem; /* Matching the approximate size */
  border-radius: 50%; /* Ensures a perfect circle */
  background: radial-gradient(
    circle,
    rgba(193, 178, 244, 1) 20%,
    /* Intense purple at the core */ rgba(242, 241, 245, 0.8) 60%,
    /* Fading light gray */ rgba(252, 250, 255, 0) 100%
      /* Transparent at the edges */
  );
  filter: blur(50px) brightness(1.2); /* Glow and brightness fine-tuned */
  box-shadow: 0 0 30px rgba(193, 178, 244, 0.6); /* Subtle outer glow */
  z-index: -1; /* Keeps the circle in the background */
}

/* You may add more styling as needed for the other elements */
</style>
