<template>
  <div
    class="text-gray-900 w-[380px] flex flex-col items-center bg-slate-100 border border-gray-300 rounded-4xl overflow-hidden"
    style="height: calc(100vh - 4rem)"
  >
    <!-- Header-->
    <div class="w-full py-4 flex flex-col items-center justify-center">
      <img
        src="../assets/img/photo_2024-11-28_10-37-05.jpg"
        alt="Profile Picture"
        class="w-60 h-60 mb-5 border-2 object-cover object-center rounded-4xl"
      />
      <h2 class="text-lg font-bold tracking-wider leading-[16.8px] mb-3">
        Niku Moradi
      </h2>
      <p class="text-sm tracking-wide">Software Engineer</p>
      <p class="text-xs tracking-wider">Frontend Developer</p>
    </div>

    <!-- middle -->
    <div class="w-3/4 flex flex-col overflow-y-auto scrollbar-hide">
      <!-- table -->
      <div class="py-5 text-sm border-b border-gray-300 mb-5">
        <ul class="space-y-2">
          <li class="flex justify-between">
            <h6>Residence:</h6>
            <span class="text-gray-500">Iran</span>
          </li>
          <li class="flex justify-between">
            <h6>City:</h6>
            <span class="text-gray-500">Kermanshah</span>
          </li>
          <li class="flex justify-between">
            <h6>Age:</h6>
            <span class="text-gray-500">26</span>
          </li>
        </ul>
      </div>
      <!-- Skill Bars -->
      <div class="space-y-4 pb-5 border-b border-gray-300 mb-5">
        <div>
          <label class="block text-sm">HTML</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[90%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">CSS</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[70%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">JavaScript</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Vue.js</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Nuxt.js</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[40%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Quasar</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[70%]"></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Tailwind</label>
          <div class="w-full bg-gray-300 h-2 rounded-full">
            <div class="bg-primary-gradient h-2 rounded-full w-[60%]"></div>
          </div>
        </div>
      </div>
      <!-- General Skills -->
      <ul
        class="text-gray-500 text-[11px] font-light tracking-wider space-y-2 mb-5"
      >
        <li class="flex items-center">
          <i class="fas fa-check fa-xs text-fuchsia-600 mr-2"></i>
          English Level B2
        </li>
        <li class="flex items-center">
          <i class="fas fa-check fa-xs text-fuchsia-600 mr-2"></i>
          Git Knowledge
        </li>
        <li class="flex items-center">
          <i class="fas fa-check fa-xs text-fuchsia-600 mr-2"></i>
          Design Patterns
        </li>
      </ul>
    </div>

    <!-- Social Links -->
    <div
      class="w-full py-4 bg-slate-200 opacity-80 text-center mt-auto text-gray-900"
    >
      <div class="space-x-10">
        <a
          href="https://t.me/yourusername"
          target="_blank"
          class="hover:opacity-80"
        >
          <i class="fab fa-telegram fa-lg"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          class="hover:opacity-80"
        >
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="hover:opacity-80"
        >
          <i class="fab fa-github fa-xl"></i>
        </a>
        <a href="tel:+1234567890" class="hover:opacity-80">
          <i class="fas fa-phone-alt fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>
