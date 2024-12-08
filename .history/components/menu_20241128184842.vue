<template>
  <div class="flex items-center bg-black text-white px-1 py-1 rounded-lg">
    <div class="font-medium rounded-lg px-10 py-2 bg-white text-black">
      <NuxtLink to="/about" exact-active-class="bg-red-500 text-white"
        >About</NuxtLink
      >
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/experience" exact-active-class="bg-red-500 text-white"
        >Experience</NuxtLink
      >
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/projects" exact-active-class="bg-red-500 text-white"
        >Projects</NuxtLink
      >
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/blog" exact-active-class="bg-red-500 text-white"
        >Blog</NuxtLink
      >
    </div>
  </div>
</template>
