<template>
  <div
    class="flex justify-center items-center min-h-screen px-4 space-x-8 relative"
  >
    <!-- SVG Background -->
    <div id="svgBackground" class="absolute z-0 top-0 right-0 bottom-0 left-0">
      <!-- Top SVG -->
      <div class="w-[25rem] h-[25rem] absolute right-0 top-0">
        <img src="/assets/img/svg-top.svg" alt="" />
      </div>
      <!-- Bottom SVG -->
      <div class="w-50 h-50 absolute bottom-0 z-0 left-0">
        <img src="/assets/img/svg-bottom.svg" alt="" />
      </div>
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
</style>
