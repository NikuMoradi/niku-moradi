<template>
  <div
    class="flex justify-center items-center min-h-screen px-4 space-x-8 relative"
  >
    <!-- SVG Background -->
    <div id="svgBackground" class="absolute top-0 right-0 bottom-0 left-0">
      <!-- Top SVG -->
      <div class="bg-black absolute top-0 right-0">
        <div
          class="background__svg01"
          data-speed="0.8"
          style="transform: translate(0px, 0px)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            class="w-full h-full"
          >
            <defs>
              <radialGradient
                id="color-gradient"
                cx="418.5665"
                cy="225.9685"
                r="499.9326"
                fx="866.8251"
                fy="4.6162"
                gradientTransform="matrix(-0.6935 0.7207 -0.7207 -0.6935 953.1126 355.0528)"
              >
                <stop offset="0" style="stop-color: #cec4ef"></stop>
                <stop
                  offset="1"
                  style="stop-color: #cec4ef; stop-opacity: 0"
                ></stop>
              </radialGradient>
            </defs>
            <circle
              class="bg01"
              cx="500"
              cy="500"
              r="500"
              fill="url(#color-gradient)"
            ></circle>
          </svg>
        </div>
      </div>
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

/* You may add more styling as needed for the other elements */
</style>
