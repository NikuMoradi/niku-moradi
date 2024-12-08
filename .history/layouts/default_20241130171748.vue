<template>
  <div class="flex justify-center items-center min-h-screen px-4 space-x-8">
    <!-- Left Panel -->
    <LeftPanel />

    <!-- Fixed Width Centered Card -->
    <div class="w-full max-w-5xl overflow-hidden z-10">
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
