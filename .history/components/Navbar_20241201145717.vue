<template>
  <div
    class="flex items-center justify-between px-3 py-1 space-x-12 fixed top-8 right-12 w-2/3"
  >
    <!-- Menu Buttons -->
    <div>
      <!-- About -->

      <NuxtLink
        to="/"
        class="py-3 px-4 text-xl text-gray-500"
        exact-active-class="border border-gray-400 rounded-3xl font-semibold tracking-wide text-zinc-800"
      >
        Home
      </NuxtLink>

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
    <div class="flex space-x-10">
      <button class="text-yellow-300">
        <i class="fa fa-star-and-crescent fa-xl"></i>
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
