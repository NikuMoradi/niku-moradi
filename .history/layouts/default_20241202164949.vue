<template>
  <!-- Global Container -->
  <div
    class="relative flex min-h-screen max-w-8xl overflow-hidden justify-center items-center"
  >
    <div class="flex-shrink-0">
      <LeftPanel />
    </div>
    <div class="flex flex-col">
      <div class="sticky top-3 left-0">
        <Navbar />
      </div>
      <div class="w-full min-h-screen">
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
