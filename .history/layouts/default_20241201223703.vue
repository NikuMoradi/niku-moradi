<template>
  <div class="relative min-h-screen">
    <!-- Left Section -->
    <div class="h-full fixed top-0 left-5 bg-blue-300">
      <div class="h-full flex items-center">
        <LeftPanel />
      </div>
    </div>

    <!-- Menu -->
    <div class="fixed top-10 left-1/3 right-5 bg-green-300 z-20">
      <Navbar />
    </div>

    <!-- Main Section (Dynamic Content) -->
    <div class="h-full absolute top-0 left-1/3 right-0 mt-24 z-0 overflow-auto">
      <p>This is dynamic content that will scroll behind the green section.</p>
      <p>Keep adding content to see the scroll effect.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
