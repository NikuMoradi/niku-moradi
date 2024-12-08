<template>
  <div class="grid grid-cols-4 grid-rows-1 min-h-screen">
    <!-- Left Section (Blue) -->
    <div class="bg-blue-300 p-4 col-span-1 h-full">
      <h2 class="text-xl">Left Section</h2>
      <p>This section stays on the left side and is fixed.</p>
    </div>

    <!-- Right Section Container -->
    <div class="col-span-3 relative">
      <!-- Green Section (Fixed at the top) -->
      <div class="bg-green-300 p-4 w-full h-32 fixed top-0 left-1/4 z-10">
        <h2 class="text-xl">Green Section</h2>
        <p>This section stays at the top of the page.</p>
      </div>

      <!-- Red Section (Dynamic Content) -->
      <div class="bg-red-300 p-4 w-full h-full mt-32 overflow-auto">
        <h2 class="text-xl">Red Section</h2>
        <p>
          This is dynamic content that will scroll behind the green section.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
