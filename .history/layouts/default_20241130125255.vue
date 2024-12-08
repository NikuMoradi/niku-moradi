<template>
  <div
    class="flex justify-center items-center min-h-screen px-4 space-x-8 relative"
  >
    <!-- SVG Background -->
    <div id="svgBackground" class="absolute inset-0 z-0">
      <!-- Top SVG -->
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

      <!-- Bottom SVG -->
      <div
        class="background__svg02"
        data-speed="0.4"
        style="transform: translate(0px, 0px)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 429.6 429.6"
          class="w-full h-full"
        >
          <defs>
            <radialGradient
              id="color-gradient-2"
              cx="2213.9312"
              cy="-11537.4219"
              r="214.85"
              fx="2393.6191"
              fy="-11419.6494"
              gradientTransform="matrix(1.902285e-02 0.9998 0.9998 -1.954636e-02 11706.5303 -2223.4016)"
            >
              <stop offset="0" style="stop-color: #cec4ef"></stop>
              <stop
                offset="1"
                style="stop-color: #cec4ef; stop-opacity: 0"
              ></stop>
            </radialGradient>
          </defs>
          <path
            class="bg02"
            fill="url(#color-gradient-2)"
            d="M63,63C146.9-21,282.9-21,366.8,62.9s83.8,219.9-0.1,303.8s-219.9,83.9-303.8,0.1S-20.9,146.9,63,63z"
          ></path>
        </svg>
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
<script>
export default {
  mounted() {
    // Simple parallax effect based on scroll
    window.addEventListener("scroll", () => {
      const topSvg = document.querySelector(".background__svg01");
      const bottomSvg = document.querySelector(".background__svg02");

      const scrollY = window.scrollY;

      // Adjust the transform based on scroll position
      topSvg.style.transform = `translate(0px, ${scrollY * 0.8}px)`;
      bottomSvg.style.transform = `translate(0px, ${scrollY * 0.4}px)`;
    });
  },
};
</script>
