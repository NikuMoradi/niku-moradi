<template>
  <div class="min-h-screen flex">
    <!-- Left Panel (Fixed to the left) -->
    <div class="fixed top-0 left-0 w-64">
      <LeftPanel />
    </div>

    <!-- Main Content Section -->
    <div class="flex-1 ml-64">
      <!-- Navbar (Fixed to the top) -->
      <div class="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      <!-- Content Below Navbar (Scrollable) -->
      <div class="pt-20 overflow-y-auto h-full scrollbar-hide">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
