<template>
  <div class="relative min-h-screen">
    <!-- Left Section -->
    <div class="fixed top-0 left-0 bg-blue-300 w-1/4 p-4">
      <LeftPanel />
    </div>

    <!-- Menu -->
    <div class="fixed top-0 left-1/3 right-0 bg-green-300 w-3/5 p-4 z-20">
      <Navbar />
    </div>

    <!-- Main Section (Dynamic Content) -->
    <div
      class="mt-24 p-4 h-full z-0 absolute top-0 left-1/3 right-0 overflow-auto"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Optional custom styles */
</style>
