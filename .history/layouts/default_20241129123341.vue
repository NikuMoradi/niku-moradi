<template>
  <div
    class="flex justify-center items-center min-h-screen bg-gray-600 px-4 space-x-8"
  >
    <LeftPanel />

    <!-- Fixed Width Centered Card -->
    <div
      class="w-full max-w-5xl overflow-hidden"
      style="
        height: calc(100vh - 40px);
        background-image: url('/assets/img/bg.jpg');
        background-size: cover;
        background-position: center;
      "
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
  background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
}
</style>
