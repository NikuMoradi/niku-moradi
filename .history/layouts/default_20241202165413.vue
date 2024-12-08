<template>
  <!-- Global Container -->
  <div
    class="relative flex min-h-screen max-w-6xl overflow-hidden justify-center items-center"
  >
    <div class="flex-shrink-0">
      <LeftPanel />
    </div>
    <div class="flex flex-col relative">
      <div class="fixed top-3 right-0">
        <Navbar />
      </div>
      <div class="min-h-screen">
        <NuxtPage />
      </div>
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
