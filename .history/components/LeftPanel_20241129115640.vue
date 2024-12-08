<template>
  <div
    class="bg-neutral-800 text-white w-72 flex flex-col items-center"
    style="height: calc(100vh - 40px)"
  >
    <!-- Header-->
    <div
      class="w-full py-4 flex flex-col items-center justify-center bg-neutral-900"
    >
      <img
        src="../assets/img/photo_2024-11-28_10-37-05.jpg"
        alt="Profile Picture"
        class="w-48 h-48 mb-5 rounded-lg border-4 border-gray-700 object-cover object-center"
      />
      <h2
        class="text-gray-100 text-[16px] font-semibold tracking-widest leading-[16.8px] mb-3"
      >
        Niku Moradi
      </h2>
      <p
        class="text-gray-400 text-[11px] font-light tracking-wider leading-[16.5px]"
      >
        Software Engineer
      </p>
      <p
        class="text-gray-400 text-[11px] font-light tracking-wider leading-[16.5px]"
      >
        Frontend Developer
      </p>
    </div>

    <div class="w-3/4 flex flex-col overflow-y-auto scrollbar-hide">
      <!-- table -->
      <div class="py-5 text-xs">
        <ul class="space-y-2">
          <li class="flex justify-between">
            <h6>Residence:</h6>
            <span class="text-gray-400">Iran</span>
          </li>
          <li class="flex justify-between">
            <h6>City:</h6>
            <span class="text-gray-400">Kermanshah</span>
          </li>
          <li class="flex justify-between">
            <h6>Age:</h6>
            <span class="text-gray-400">26</span>
          </li>
        </ul>
      </div>
      <!-- divider -->
      <div class="w-full h-px bg-gray-600 opacity-30 my-3 z-20"></div>
      <!-- Skill Bars -->
      <div class="space-y-4 pb-5 border border-t">
        <div>
          <label class="block text-sm">HTML</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[90%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">CSS</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[70%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">JavaScript</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Vue.js</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Nuxt.js</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[40%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Quasar</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[70%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Tailwind</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[60%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Git</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-blue-600 h-2 rounded-full w-[40%]"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div class="w-full py-4 text-center mt-auto bg-neutral-900 text-white">
      <div class="space-x-10">
        <a
          href="https://t.me/yourusername"
          target="_blank"
          class="text-white hover:text-blue-400"
        >
          <i class="fab fa-telegram fa-lg"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          class="text-white hover:text-blue-600"
        >
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="text-white hover:text-gray-700"
        >
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a href="tel:+1234567890" class="text-white hover:text-green-400">
          <i class="fas fa-phone-alt fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>
