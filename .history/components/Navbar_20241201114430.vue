<template>
  <div
    class="flex items-center px-3 py-1 space-x-12 fixed top-20 right-20 w-2/3"
  >
    <!-- About -->
    <div
      class="py-3 px-4 text-xl"
      exact-active-class="border border-gray-400 rounded-3xl font-semibold tracking-wide text-zinc-800"
    >
      <NuxtLink to="/about"> Home </NuxtLink>
    </div>

    <!-- Experience -->
    <div class="text-gray-500 text-xl">
      <NuxtLink to="/experience"> Experience </NuxtLink>
    </div>

    <!-- Projects -->
    <div class="text-gray-500 text-xl">
      <NuxtLink to="/projects"> Projects </NuxtLink>
    </div>
    <!-- Blog -->
  </div>
</template>
