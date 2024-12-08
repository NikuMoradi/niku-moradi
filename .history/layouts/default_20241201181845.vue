<template>
  <div class="w-6xl min-h-screen flex justify-center py-10">
    <div class="fixed left-12"><LeftPanel /></div>
    <div class="max-w-5xl z-10">
      <div class="fixed right-12"><Navbar /></div>

      <!-- Scrollable Content -->
      <div class="overflow-y-auto h-full scrollbar-hide">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
