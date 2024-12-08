<template>
  <div
    class="flex justify-center items-center min-h-screen bg-white px-4 space-x-8"
  >
    <LeftPanel />

    <!-- Fixed Width Centered Card -->
    <div
      class="bg-black bg-opacity-50 w-full max-w-5xl overflow-hidden"
      style="height: calc(100vh - 40px)"
    >
      <!-- Scrollable Content -->
      <div class="overflow-y-auto h-full scrollbar-hide">
        <NuxtPage />
      </div>
    </div>
    <!-- Right Panel -->
    <RightPanel />
  </div>
</template>

<style>
/* Add any custom global styles here */
body {
  background-image: radial-gradient(
    circle 311px at 8.6% 27.9%,
    rgba(62, 147, 252, 0.57) 12.9%,
    rgba(239, 183, 192, 0.44) 91.2%
  ) !important;
}
</style>
