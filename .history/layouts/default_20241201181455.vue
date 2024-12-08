<template>
  <div class="w-6xl min-h-screen flex justify-center px-16">
    <div class="fixed left-12"><LeftPanel /></div>
    <div class="fixed right-12"><Navbar /></div>
    <!-- Fixed Width Centered Card -->
    <div
      class="w-full max-w-5xl overflow-hidden z-10"
      style="height: calc(100vh)"
    >
      <!-- Scrollable Content -->
      <!-- <div class="overflow-y-auto h-full scrollbar-hide"> -->
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped></style>
