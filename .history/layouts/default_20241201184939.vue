<template>
  <div class="relative max-w-6xl">
    <!-- Left Section (Blue) -->
    <div class="fixed top-0 left-0 w-1/4 p-4 z-10">
      <LeftPanel />
    </div>

    <!-- Right Section (Green and Red) -->
    <div class="ml-1/4 pl-4 pt-16">
      <!-- Green Section (Fixed at the top) -->
      <div class="fixed top-0 left-1/4 right-0 w-3/4 p-4 z-20">
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
