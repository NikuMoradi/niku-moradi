<template>
  <div
    class="780:w-[280px] 780:h-[calc(100vh-2rem)] 1000:w-[400px] bg-white text-gray-900 flex flex-col items-center border border-gray-300 rounded-3xl overflow-hidden dark:bg-[#0f0f0f] dark:text-slate-200 dark:border-[#303033]"
  >
    <!-- Header-->
    <div class="w-full py-4 flex flex-col items-center justify-center">
      <img
        src="../assets/img/photo_2024-11-28_10-37-05.jpg"
        alt="Profile Picture"
        class="w-[70%] h-auto 780:w-[14rem] 780:h-[14rem] mb-5 object-cover object-center rounded-3xl"
      />
      <h2 class="text-lg font-bold tracking-wider leading-[16.8px] mb-3">
        Niku Moradi
      </h2>
      <p class="text-sm tracking-wide">Software Engineer</p>
      <p class="text-xs tracking-wider">Frontend Developer</p>
    </div>

    <!-- middle -->
    <div class="w-3/4 flex flex-col 780:overflow-y-auto 780:scrollbar-hide">
      <!-- table -->
      <div
        class="py-2 text-sm border-b border-gray-300 mb-5 dark:border-[#303033]"
      >
        <ul class="space-y-1">
          <li class="flex justify-between">
            <h6>Residence:</h6>
            <span class="text-gray-500 dark:text-gray-300">Iran</span>
          </li>
          <li class="flex justify-between">
            <h6>City:</h6>
            <span class="text-gray-500 dark:text-gray-300">Kermanshah</span>
          </li>
          <li class="flex justify-between">
            <h6>Age:</h6>
            <span class="text-gray-500 dark:text-gray-300">26</span>
          </li>
        </ul>
      </div>
      <!-- Skill Bars -->
      <div
        class="space-y-4 pb-5 border-b border-gray-300 mb-5 dark:border-[#303033]"
      >
        <div>
          <label class="block text-sm">HTML</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[90%]"
            ></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">CSS</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[70%]"
            ></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">JavaScript</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[50%]"
            ></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Vue.js</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[50%]"
            ></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Nuxt.js</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[40%]"
            ></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Quasar</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[70%]"
            ></div>
          </div>
        </div>
        <div>
          <label class="block text-sm">Tailwind</label>
          <div class="w-full bg-gray-300 h-3 rounded-full">
            <div
              class="bg-color-light dark:bg-color-dark h-3 rounded-full w-[60%]"
            ></div>
          </div>
        </div>
      </div>
      <!-- General Skills -->
      <ul
        class="text-gray-500 dark:text-gray-300 text-[11px] font-light tracking-wider space-y-2 mb-5"
      >
        <li class="flex items-center">
          <PhosphorIconCheck
            weight="bold"
            class="text-fuchsia-600 dark:text-[#d286e7] mr-2"
          />
          English Level B2
        </li>
        <li class="flex items-center">
          <PhosphorIconCheck
            weight="bold"
            class="text-fuchsia-600 dark:text-[#d286e7] mr-2"
          />
          Git Knowledge
        </li>
        <li class="flex items-center">
          <PhosphorIconCheck
            weight="bold"
            class="text-fuchsia-600 dark:text-[#d286e7] mr-2"
          />
          Design Patterns
        </li>
      </ul>
    </div>

    <!-- Social Links -->
    <div
      class="text-2xl px-12 py-3 w-full opacity-80 text-center mt-auto text-gray-900 bg-zinc-100 780:text-lg 1000:text-xl 780:px-10 1000:px-20"
    >
      <div class="flex justify-evenly w-full 780:space-x-3 1000:space-x-8">
        <a
          href="https://t.me/nikiiii_98"
          target="_blank"
          class="hover:opacity-80"
        >
          <PhosphorIconTelegramLogo weight="bold" />
        </a>
        <a
          href="https://www.linkedin.com/in/NikuMoradi"
          target="_blank"
          class="hover:opacity-80"
        >
          <PhosphorIconLinkedinLogo weight="bold" />
        </a>
        <a
          href="https://github.com/NikuMoradi"
          target="_blank"
          class="hover:opacity-80"
        >
          <PhosphorIconGithubLogo weight="bold" />
        </a>
        <a href="tel:+1234567890" class="hover:opacity-80">
          <PhosphorIconPhone weight="bold" />
        </a>
      </div>
    </div>
  </div>
</template>
