<template>
  <section id="projects">
    <div class="max-w-5xl min-h-screen px-2 my-20">
      <div class="mb-16">
        <h3
          class="text-4xl font-bold leading-normal bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          My projects
        </h3>
      </div>

      <div class="flex space-x-20">
        <!-- Project-1  -->
        <a
          href="https://css-generator-m.vercel.app/#/"
          target="_blank"
          class="block w-2/5 border border-gray-300 rounded-3xl"
        >
          <div class="hover:scale-102 duration-500">
            <!-- Image -->
            <div class="p-6">
              <img
                src="/assets/img/cssGenPre-1.png"
                alt="Project Title"
                class="w-full"
              />
            </div>
            <!-- Text -->
            <div class="p-6 space-y-3">
              <h4 class="text-zinc-800 font-bold text-xl">
                Css Generator Tool
              </h4>
              <p class="text-gray-700">
                This tool is perfect for beginners looking to learn and practice
                CSS, offering an intuitive interface that makes it easy to
                create and preview styles effortlessly. Developed as part of my
                internship for a site-builder app.
              </p>
              <div class="flex space-x-2">
                <span
                  class="border border-gray-300 rounded-3xl py-1 px-4 text-gray-700 pointer-events-none"
                  >vue.js</span
                >
                <span
                  class="border border-gray-300 rounded-3xl py-1 px-4 text-gray-700 pointer-events-none"
                  >quasar</span
                >
              </div>
            </div>
          </div>
        </a>

        <!-- Project-2 -->
        <a
          href="https://css-generator-m.vercel.app/#/"
          target="_blank"
          class="block w-2/5 border border-gray-300 rounded-3xl hover:scale-102 duration-500"
        >
          <!-- Image -->
          <div class="p-4">
            <img
              src="/assets/img/cssGenPre-2.png"
              alt="Project Title"
              class="w-full"
            />
          </div>
          <!-- Text -->
          <div class="p-4 space-y-3">
            <h4 class="text-zinc-800 font-bold text-xl">Css Generator Tool</h4>
            <p class="text-gray-700">
              This tool is perfect for beginners looking to learn and practice
              CSS, offering an intuitive interface that makes it easy to create
              and preview styles effortlessly. Developed as part of my
              internship for a site-builder app.
            </p>
            <div class="flex space-x-2">
              <span
                class="border border-gray-300 rounded-3xl py-1 px-4 text-gray-700 pointer-events-none"
                >vue.js</span
              >
              <span
                class="border border-gray-300 rounded-3xl py-1 px-4 text-gray-700 pointer-events-none"
                >quasar</span
              >
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
