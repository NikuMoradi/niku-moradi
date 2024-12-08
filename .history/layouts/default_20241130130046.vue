<template>
  <div
    class="flex justify-center items-center min-h-screen px-4 space-x-8 relative"
  >
    <!-- SVG Background -->
    <div id="svgBackground" class="absolute">
      <!-- Top SVG -->
      <div class="w-50 h-50 bg-red"></div>
      <!-- Bottom SVG -->
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
  margin: 0;
  overflow-x: hidden;
}

/* Ensure the background covers the entire screen */
#svgBackground {
  position: fixed; /* Keep the background in place when scrolling */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none; /* Prevent interference with other elements */
  z-index: -1; /* Ensure background is behind content */
}

.background__svg01,
.background__svg02 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Custom Scroll Effect */
html,
body {
  scroll-behavior: smooth;
}

/* You may add more styling as needed for the other elements */
</style>
