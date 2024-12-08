<template>
  <div class="relative min-h-screen">
    <!-- Left Section -->
    <div class="h-full fixed left-0 bg-blue-300">
      <LeftPanel />
    </div>

    <!-- Menu -->
    <div class="fixed top-0 left-1/3 right-0 bg-green-300 z-20">
      <Navbar />
    </div>

    <!-- Main Section (Dynamic Content) -->
    <div class="h-full absolute top-0 left-1/3 right-0 mt-24 z-0 overflow-auto">
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
