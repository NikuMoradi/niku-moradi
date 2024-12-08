<template>
  <div class="flex max-w-8xl">
    <!-- Sidebar -->
    <div class="h-screen fixed">
      <LeftPanel />
    </div>

    <!-- Main Content -->
    <div class="flex-1 pl-[30rem]">
      <Navbar />
      <NuxtPage />
    </div>
  </div>
</template>
