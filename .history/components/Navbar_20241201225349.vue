<template>
  <div class="flex items-center justify-between px-3 py-1 space-x-12">
    <!-- Menu Buttons -->
    <div>
      <!-- About -->

      <div
        class="relative bg-gradient-to-r from-blue-400 via-pink-300 to-purple-500 h-screen flex items-center justify-center"
      >
        <NuxtLink
          to="/"
          class="py-3 px-6 text-xl text-gray-500 bg-transparent backdrop-blur-md border border-gray-300 rounded-3xl font-semibold tracking-wide"
          exact-active-class="border-gray-400 text-zinc-800"
        >
          Home
        </NuxtLink>
      </div>

      <!-- Experience -->
      <NuxtLink
        to="/experience"
        class="py-3 px-4 text-xl text-gray-500"
        exact-active-class="border border-gray-400 rounded-3xl font-semibold tracking-wide text-zinc-800"
      >
        Experience
      </NuxtLink>

      <!-- Projects -->
      <NuxtLink
        to="/projects"
        class="py-3 px-4 text-xl text-gray-500"
        exact-active-class="border border-gray-400 rounded-3xl font-semibold tracking-wide text-zinc-800"
      >
        Projects
      </NuxtLink>
      <!-- Blog -->
      <NuxtLink
        class="py-3 px-4 text-xl text-gray-500"
        exact-active-class="border border-gray-400 rounded-3xl font-semibold tracking-wide text-zinc-800"
      >
        Blog
      </NuxtLink>
    </div>

    <!-- Dark Mode and Talk buttons -->
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
