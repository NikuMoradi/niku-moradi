<template>
  <!-- Global Container -->
  <div
    class="relative flex min-h-screen max-w-6xl overflow-hidden justify-center items-center"
  >
    <div class="w-[400px] bg-red-400 flex-shrink-0">
      <LeftPanel />
    </div>
    <div class="max-w-full flex flex-1 flex-col">
      <div class="bg-green w-full">
        <Navbar />
      </div>
      <div class="bg-yellow w-full">
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
