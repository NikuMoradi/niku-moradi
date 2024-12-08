<template>
  <div class="flex justify-center items-center min-h-screen px-4 space-x-8">
    <div
      id="svgBackground"
      class="absolute top-0 left-0 right-0 bottom-0"
    ></div>
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
