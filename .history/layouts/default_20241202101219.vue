<template>
  <div class="relative min-h-screen">
    <!-- Left Section -->
    <div class="h-full fixed top-0 left-14">
      <div class="h-full flex items-center">
        <LeftPanel />
      </div>
    </div>

    <!-- Menu -->
    <div class="fixed top-10 left-[30%] right-8 z-20">
      <Navbar />
    </div>

    <!-- Main Section (Dynamic Content) -->
    <div
      class="h-full absolute top-0 left-[30%] right-10 mt-24 z-0 overflow-auto"
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
