<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-800 px-4">
    <!-- Fixed Width Centered Card -->
    <div
      class="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden"
      style="height: calc(100vh - 40px)"
    >
      <!-- Scrollable Content -->
      <div class="overflow-y-auto h-full">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>
/* Add any custom global styles here */
body {
  background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
}
</style>
