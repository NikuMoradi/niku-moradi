<template>
  <div class="flex max-w-8xl">
    <!-- Sidebar -->
    <div class="w-380 h-screen fixed top-7 left-7">
      <LeftPanel />
    </div>

    <!-- Main Content -->
    <div class="flex-1 pl-[30rem] w-full">
      <!-- <Navbar class="fixed top-8 z-10" /> -->
      <div class="bg-black py-3 fixed top-8">dsa</div>
      <NuxtPage />
    </div>
  </div>
</template>
