<template>
  <div class="flex max-w-8xl">
    <!-- Sidebar -->
    <div class="w-380 h-screen fixed top-6">
      <LeftPanel />
    </div>

    <!-- Main Content -->
    <div class="flex-1 pl-[30rem]">
      <Navbar />
      <NuxtPage />
    </div>
  </div>
</template>
