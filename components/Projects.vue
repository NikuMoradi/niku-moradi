<template>
  <section id="projects">
    <div class="max-w-5xl min-h-screen my-20 py-10">
      <div class="mb-4 780:mb-9" data-aos="fade-up">
        <h3
          class="text-3xl 780:text-4xl font-bold leading-normal bg-text-transparent bg-clip-text text-color-light text-transparent dark:text-color-dark"
        >
          My projects
        </h3>
      </div>

      <div
        class="flex flex-col space-y-7 1260:flex-row 1280:space-x-14 1260:space-y-0"
      >
        <!-- Project-1  -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-[24rem] h-[31rem] relative flex flex-col space-y-3 border border-gray-300 dark:border-[#303033] rounded-3xl"
        >
          <!-- Image -->
          <div class="w-full h-[14rem] overflow-hidden rounded-t-3xl">
            <img
              src="/assets/img/cssGenPre-1.png"
              alt="Project Title"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Text -->
          <div class="flex flex-col space-y-3 p-4">
            <a href="https://css-generator-m.vercel.app/#/" target="_blank">
              <h4
                class="text-zinc-800 dark:text-slate-100 font-bold text-xl hover:opacity-70 duration-200"
              >
                Css Generator Tool
              </h4>
            </a>
            <p class="dark:text-gray-200">
              This tool is perfect for beginners looking to learn and practice
              CSS, offering an intuitive interface that makes it easy to create
              and preview styles effortlessly. Developed as part of my
              internship for a site-builder app.
            </p>
            <div class="absolute bottom-5 flex space-x-2">
              <span
                class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                >vue.js</span
              >
              <span
                class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                >quasar</span
              >
            </div>
          </div>
        </div>

        <!-- Project-2 -->
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="relative w-[24rem] h-[31rem] flex flex-col space-y-3 border border-gray-300 dark:border-[#303033] rounded-3xl"
        >
          <!-- Image -->

          <div class="w-full h-[14rem] overflow-hidden rounded-t-3xl">
            <img
              src="/assets/img/E-commerce.png"
              alt="Project Title"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Text -->
          <div class="flex flex-col space-y-3 p-4">
            <a href="https://css-generator-m.vercel.app/#/" target="_blank">
              <h4
                class="text-zinc-800 dark:text-slate-100 font-bold text-xl hover:opacity-70 duration-200"
              >
                SoundM e-commerce shop
              </h4>
            </a>
            <p class="dark:text-gray-200">Under development...</p>
            <div class="flex space-x-2 absolute bottom-5">
              <span
                class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                >vue.js</span
              >
              <span
                class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                >Nuxt.js</span
              >
              <span
                class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                >Tailwind</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
