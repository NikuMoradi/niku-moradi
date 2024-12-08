<template>
  <div class="flex items-center bg-black text-white px-1 py-1 rounded-lg">
    <!-- About -->
    <NuxtLink
      to="/about"
      class="font-medium rounded-lg px-10 py-2 hover:text-gray-300 transition duration-200"
      exact-active-class="bg-white text-black hover:text-black "
    >
      About
    </NuxtLink>

    <!-- Experience -->
    <NuxtLink
      to="/experience"
      class="font-medium rounded-lg px-10 py-2 hover:text-gray-300 transition duration-200"
      exact-active-class="bg-white text-black"
    >
      Experience
    </NuxtLink>

    <!-- Projects -->
    <NuxtLink
      to="/projects"
      class="font-medium rounded-lg px-10 py-2 hover:text-gray-300 transition duration-200"
      exact-active-class="bg-white text-black"
    >
      Projects
    </NuxtLink>

    <!-- Blog -->
    <NuxtLink
      to="/blog"
      class="font-medium rounded-lg px-10 py-2 hover:text-gray-300 transition duration-200"
      exact-active-class="bg-white text-black"
    >
      Blog
    </NuxtLink>
  </div>
</template>
