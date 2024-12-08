<template>
  <div class="flex justify-center items-center min-h-screen px-4 space-x-8">
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
    <!-- Right Panel -->
    <RightPanel />
  </div>
</template>

<style>
/* Add any custom global styles here */
body {
  background-color: rgb(229, 119, 252);
}
</style>
