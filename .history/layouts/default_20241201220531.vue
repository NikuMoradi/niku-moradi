<template>
  <div class="relative min-h-screen">
    <!-- Left Section (Blue) -->
    <div class="fixed top-0 left-0 bg-blue-300 w-1/4 h-full p-4 z-10">
      <h2 class="text-xl">Left Section</h2>
      <p>This is the left section, always fixed on the left.</p>
    </div>

    <!-- Right Section (Green and Red) -->
    <div class="ml-1/4 pl-4 pt-16">
      <!-- Green Section (Fixed at the top) -->
      <div class="fixed top-0 left-1/4 right-0 bg-green-300 w-3/4 p-4 z-20">
        <h2 class="text-xl">Green Section</h2>
        <p>This section is fixed at the top of the page.</p>
      </div>

      <!-- Red Section (Dynamic Content) -->
      <div
        class="mt-24 p-4 h-full z-0 absolute top-0 left-1/4 right-0 overflow-auto"
      >
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
