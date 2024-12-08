<template>
  <div class="flex items-center justify-between px-3 py-1 space-x-12">
    <!-- Menu Buttons -->
    <div class="flex space-x-4">
      <!-- Home -->
      <NuxtLink
        to="/"
        class="py-3 px-6 text-xl text-gray-500 backdrop-blur-md border rounded-3xl font-semibold tracking-wide hover:text-gray-900 transition"
        exact-active-class="border-gray-400 text-zinc-800 border-gray-300 "
      >
        Home
      </NuxtLink>

      <!-- Experience -->
      <NuxtLink
        to="/experience"
        class="py-3 px-6 text-xl text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-800 transition"
        exact-active-class="border-gray-400 text-zinc-800 border-gray-300 "
      >
        Experience
      </NuxtLink>

      <!-- Projects -->
      <NuxtLink
        to="/projects"
        class="py-3 px-6 text-xl text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:bg-white/20 transition"
        exact-active-class="border-gray-400 text-zinc-800 border-gray-300 "
      >
        Projects
      </NuxtLink>

      <!-- Blog -->
      <NuxtLink
        to="/blog"
        class="py-3 px-6 text-xl text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:bg-white/20 transition"
        exact-active-class="border-gray-400 text-zinc-800 border-gray-300 "
      >
        Blog
      </NuxtLink>
    </div>

    <!-- Dark Mode and Talk Buttons -->
    <div class="flex space-x-8">
      <button class="text-gray-500">
        <i class="fa fa-moon fa-xl"></i>
      </button>
      <button
        class="py-3 px-7 rounded-3xl text-xl text-slate-100 bg-primary-gradient"
      >
        Let's Talk
        <i class="fa fa-message"></i>
      </button>
    </div>
  </div>
</template>
