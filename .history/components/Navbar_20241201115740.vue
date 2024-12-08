<template>
  <div
    class="flex items-center justify-between px-3 py-1 space-x-12 fixed top-20 right-20 w-2/3"
  >
    <div>
      <!-- About -->

      <NuxtLink
        to="/about"
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
    </div>
    <button
      class="py-3 px-7 rounded-3xl text-xl text-slate-100 bg-primary-gradient"
    >
      Let's Talk
      <i class="fa fa-message"></i>
    </button>
  </div>
</template>
