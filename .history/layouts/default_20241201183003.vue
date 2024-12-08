<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar (Fixed to the top) -->
    <div class="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <Navbar />
    </div>

    <!-- Main Content Section (Below Navbar) -->
    <div class="flex flex-1 pt-20">
      <!-- Left Panel (Fixed to the left) -->
      <div class="w-64 bg-gray-200 h-full">
        <LeftPanel />
      </div>

      <!-- Main Content (Right of the left panel) -->
      <div class="flex-1 overflow-y-auto">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
