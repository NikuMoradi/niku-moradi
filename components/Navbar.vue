<template>
  <!-- First Menu (Visible on screens larger than 780) -->
  <div class="hidden 780:block">
    <div class="flex items-center justify-between">
      <!-- Menu Buttons -->
      <div class="flex items-center space-x-3">
        <!-- Home -->
        <NuxtLink
          to="/"
          class="780:py-6 px-4 1260:py-2 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
          exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
        >
          <span class="hidden 1260:block">Home</span>
          <i class="block 1260:hidden fa-sm fa fa-home"></i>
        </NuxtLink>

        <!-- Education -->
        <NuxtLink
          to="/education"
          class="780:py-6 px-4 1260:py-2 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
          exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
        >
          <span class="hidden 1260:block">Education</span>
          <i class="block 1260:hidden fa-sm fa-regular fa-user"></i>
        </NuxtLink>

        <!-- Projects -->
        <NuxtLink
          to="/projects"
          class="780:py-6 px-4 1260:py-2 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
          exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
        >
          <span class="hidden 1260:block">Projects</span>
          <i class="block 1260:hidden fa-sm fa-regular fa-rectangle-list"></i>
        </NuxtLink>

        <!-- Blog -->
        <!-- <NuxtLink
          to="/blog"
          class="780:py-6 px-4 1260:py-2 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
          exact-active-class="border border-gray-400 text-zinc-800 border-gray-300 "
        >
          <span class="hidden 1260:block">Blog</span>
          <i class="block 1260:hidden fa-sm fa-solid fa-blog"></i>
        </NuxtLink> -->
        <!-- Contacy -->
        <NuxtLink
          to="/contact"
          class="780:py-6 px-4 1260:py-2 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 transition duration-200"
          exact-active-class=" border border-gray-400 text-zinc-800 border-gray-300 "
        >
          <span class="hidden 1260:block">Contact</span>
          <i class="block 1260:hidden fa-sm fa-regular fa-rectangle-list"></i>
        </NuxtLink>
      </div>

      <!-- Dark Mode and Talk Buttons -->
      <div class="flex space-x-2 items-center">
        <button
          class="px-4 h-11 text-gray-500 backdrop-blur-md rounded-full hover:text-gray-700 transition duration-200"
        >
          <i class="fa-solid fa-moon fa-sm"></i>
        </button>
        <button
          class="780:py-2 780:px-3 py-3 px-7 rounded-3xl text-lg text-slate-100 bg-primary-gradient"
        >
          Let's Talk
          <i class="fa fa-message fa-sm"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Second Menu (Visible on screens smaller than 780) -->
  <div class="block 780:hidden">
    <div class="flex items-center">
      <!-- Menu Buttons -->
      <div
        class="flex items-center h-12 space-x-2 text-gray-500 backdrop-blur-md rounded-3xl"
      >
        <!-- Home -->
        <NuxtLink
          to="/"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black text-white text-white "
        >
          <i class="fa fa-home"></i>
        </NuxtLink>

        <!-- Education -->
        <NuxtLink
          to="/education"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black text-white text-white "
        >
          <i class="fa-regular fa-user"></i>
        </NuxtLink>

        <!-- Projects -->
        <NuxtLink
          to="/projects"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black text-white text-white "
        >
          <i class="fa-regular fa-rectangle-list"></i>
        </NuxtLink>

        <!-- Blog -->
        <NuxtLink
          to="/blog"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black text-white text-white "
        >
          <i class="fa-solid fa-blog"></i>
        </NuxtLink>
        <div class="flex justify-center items-center pl-3 space-x-3">
          <button class="">
            <i class="fa-solid fa-moon fa-sm"></i>
          </button>
          <button
            class="px-4 py-3 rounded-full text-slate-100 bg-primary-gradient"
          >
            <i class="fa fa-message fa-md"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
