<template>
  <section id="projects">
    <div class="w-full max-w-5xl min-h-screen 780:my-10 780:py-10">
      <div class="mb-4 780:mb-9" data-aos="fade-up">
        <h3
          class="text-3xl 780:text-4xl font-bold leading-normal bg-text-transparent bg-clip-text text-color-light text-transparent dark:text-color-dark"
        >
          My projects
        </h3>
      </div>

      <div
        class="flex flex-col space-y-7 640:flex-row 640:space-x-14 640:space-y-0 780:flex-col 780:space-y-7 780:space-x-0 1180:flex-row 1180:space-x-14 1180:space-y-0"
      >
        <!-- Project-1  -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full h-[35rem] 640:w-[20rem] 640:h-[34rem] 780:w-[25rem] relative flex flex-col space-y-3 border border-gray-300 dark:border-[#303033] rounded-3xl"
        >
          <!-- Image -->
          <div class="w-full h-[14rem] overflow-hidden p-4">
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

            <div
              class="absolute bottom-5 left-0 right-0 flex flex-col space-y-3 640:flex-row 640:justify-between 640:items-center 640:space-y-0 px-3"
            >
              <div class="flex space-x-2">
                <span
                  class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                  >vue.js</span
                >
                <span
                  class="border border-gray-300 dark:border-[#303033] rounded-3xl py-1 px-4 dark:text-gray-200 pointer-events-none"
                  >quasar</span
                >
              </div>
              <button
                class="640:hidden flex items-center justify-center py-2 space-x-2 rounded-3xl text-lg text-slate-100 bg-color-light dark:bg-color-dark hover:opacity-90 transition duration-300"
                onclick="window.open('https://css-generator-m.vercel.app', '_blank')"
              >
                Visit Site
              </button>
            </div>
          </div>
        </div>

        <!-- Project-2 -->
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="w-full h-[35rem] 640:w-[20rem] 640:h-[34rem] 780:w-[25rem] relative flex flex-col space-y-3 border border-gray-300 dark:border-[#303033] rounded-3xl"
        >
          <!-- Image -->

          <div class="w-full h-[14rem] overflow-hidden p-4">
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
