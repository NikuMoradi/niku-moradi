<template>
  <div class="relative min-h-screen">
    <!-- Left Section -->
    <div class="w-1/4 h-full fixed top-0 left-0 bg-blue-300">
      <LeftPanel />
    </div>

    <!-- Menu -->
    <div class="w-3/5 fixed top-0 left-1/3 right-0 bg-green-300 z-20">
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
