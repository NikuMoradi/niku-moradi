<template>
  <div class="flex items-center justify-between px-3 py-1 space-x-12">
    <!-- Menu Buttons -->
    <div>
      <!-- About -->

      <div
        class="bg-white-30 bg-transparent backdrop-blur-md py-3 px-4 text-xl text-gray-500"
      >
        <NuxtLink
          to="/"
          class=""
          exact-active-class="border border-gray-400 rounded-3xl font-semibold tracking-wide text-zinc-800"
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
