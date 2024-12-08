<template>
  <div class="relative min-h-screen max-w-6xl pt-16 p-4">
    <!-- Left Section (Blue) -->
    <div class="fixed top-0 left-4 w-1/4 h-full z-10">
      <LeftPanel />
    </div>

    <!-- Right Section (Green and Red) -->
    <div class="ml-1/4">
      <!-- Green Section (Fixed at the top) -->
      <div class="fixed top-0 right-0 w-3/4 z-20">
        <Navbar />
      </div>

      <!-- Red Section (Dynamic Content) -->
      <div
        class="mt-24 p-4 w-full h-full z-0 absolute top-0 left-1/4 right-0 overflow-auto"
      >
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
