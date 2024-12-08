<template>
  <div class="flex max-w-8xl">
    <!-- Sidebar -->
    <div class="w-380 h-screen fixed top-7 left-7">
      <LeftPanel />
    </div>
    <Navbar class="fixed top-8 right-0 z-10 pl-[30rem]" />

    <!-- Main Content -->
    <div class="flex-1 pl-[30rem]">
      <NuxtPage />
    </div>
  </div>
</template>
