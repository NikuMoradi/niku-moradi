<template>
  <div class="flex justify-center items-center min-h-screen px-4 space-x-8">
    <div id="svgBackground" class="absolute top-0 left-0 right-0 bottom-0">
      <!-- Top Svg -->
      <div
        class="background__svg01"
        data-speed="0.8"
        style="
          translate: none;
          rotate: none;
          scale: none;
          transform: translate(0px, 0px);
        "
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1000px"
          height="1000px"
          viewBox="0 0 1000 1000"
          style="enable-background: new 0 0 1000 1000"
          xml:space="preserve"
        >
          <style type="text/css">
            .bg01 {
              fill: url(#color-gradient);
            }
          </style>
          <radialGradient
            id="color-gradient"
            cx="418.5665"
            cy="225.9685"
            r="499.9326"
            fx="866.8251"
            fy="4.6162"
            gradientTransform="matrix(-0.6935 0.7207 -0.7207 -0.6935 953.1126 355.0528)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style="stop-color: #cec4ef"></stop>
            <stop
              offset="1"
              style="stop-color: #cec4ef; stop-opacity: 0"
            ></stop>
          </radialGradient>
          <circle class="bg01" cx="500" cy="500" r="500"></circle>
        </svg>
      </div>
      <!-- Bottom Svg -->

      <div
        class="background__svg02"
        data-speed="0.4"
        style="
          translate: none;
          rotate: none;
          scale: none;
          transform: translate(0px, 0px);
        "
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="429.6px"
          height="429.6px"
          viewBox="0 0 429.6 429.6"
          style="enable-background: new 0 0 429.6 429.6"
          xml:space="preserve"
        >
          <style type="text/css">
            .bg02 {
              fill: url(#color-gradient-2);
            }
          </style>
          <g id="Layer_1-2">
            <radialGradient
              id="color-gradient-2"
              cx="2213.9312"
              cy="-11537.4219"
              r="214.85"
              fx="2393.6191"
              fy="-11419.6494"
              gradientTransform="matrix(1.902285e-02 0.9998 0.9998 -1.954636e-02 11706.5303 -2223.4016)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style="stop-color: #cec4ef"></stop>
              <stop
                offset="1"
                style="stop-color: #cec4ef; stop-opacity: 0"
              ></stop>
            </radialGradient>
            <path
              class="bg02"
              d="M63,63C146.9-21,282.9-21,366.8,62.9s83.8,219.9-0.1,303.8s-219.9,83.9-303.8,0.1S-20.9,146.9,63,63z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <LeftPanel />

    <!-- Fixed Width Centered Card -->
    <div
      class="w-full max-w-5xl overflow-hidden"
      style="height: calc(100vh - 40px)"
    >
      <!-- Scrollable Content -->
      <div class="overflow-y-auto h-full scrollbar-hide">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>
/* Add any custom global styles here */
body {
  background-color: #e6ebf4;
}
</style>
