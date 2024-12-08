<template>
  <div class="flex items-center bg-black text-white px-1 py-1 rounded-lg">
    <div class="font-medium rounded-lg px-10 py-2">
      <NuxtLink to="/about" exact-active-class="bg-white text-black"
        >About</NuxtLink
      >
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/experience" exact-active-class="bg-white text-black"
        >Experience</NuxtLink
      >
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/projects" exact-active-class="bg-white text-blacke"
        >Projects</NuxtLink
      >
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
      exact-active-class="bg-white text-black"
    >
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
  </div>
</template>
