<template>
  <div class="flex items-center justify-between">
    <!-- Menu Buttons -->
    <div class="flex items-center space-x-3">
      <!-- Home -->
      <NuxtLink
        to="/"
        class="h-11 px-6 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
        exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
      >
        <span class="hidden min-[1260px]:block">Home</span>
        <i class="block min-[1260px]:hidden fa fa-home"></i>
      </NuxtLink>

      <!-- Experience -->
      <NuxtLink
        to="/experience"
        class="h-11 px-6 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
        exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
      >
        <span class="hidden min-[1260px]:block">Experience</span>
        <i class="block min-[1260px]:hidden fa-regular fa-user"></i>
      </NuxtLink>

      <!-- Projects -->
      <NuxtLink
        to="/projects"
        class="h-11 px-6 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
        exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
      >
        <span class="hidden min-[1260px]:block">Projects</span>
        <i class="block min-[1260px]:hidden fa-regular fa-rectangle-list"></i>
      </NuxtLink>

      <!-- Blog -->
      <NuxtLink
        to="/blog"
        class="h-11 px-6 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
        exact-active-class="border border-gray-400 text-zinc-800 border-gray-300 "
      >
        <span class="hidden min-[1260px]:block">Blog</span>
        <i class="block min-[1260px]:hidden fa-solid fa-blog"></i>
      </NuxtLink>
    </div>

    <!-- Dark Mode and Talk Buttons -->
    <div class="flex space-x-2 items-center">
      <button
        class="px-4 h-11 text-gray-500 backdrop-blur-md rounded-full hover:text-gray-700 transition duration-200"
      >
        <i class="fa-solid fa-moon fa-lg"></i>
      </button>
      <button
        class="h-11 px-7 rounded-3xl text-xl text-slate-100 bg-primary-gradient"
      >
        Let's Talk
        <i class="fa fa-message fa-sm"></i>
      </button>
    </div>
  </div>
</template>
