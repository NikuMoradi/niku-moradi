<template>
  <div
    class="flex items-center px-3 py-1 space-x-12 fixed top-20 right-20 w-2/3"
  >
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
    <button>
      <span>Let's Talk</span>
      <i class="fa fa-check"></i>
    </button>
  </div>
</template>
