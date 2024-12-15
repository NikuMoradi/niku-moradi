<template>
  <section id="blog">
    <div class="max-w-5xl min-h-screen px-2 my-20">
      <div class="mb-16">
        <h3
          class="text-4xl font-bold leading-normal bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          My Blog
        </h3>
      </div>

      <div class="flex space-x-20">
        <!-- blog-1  -->
        <a
          href="https://css-generator-m.vercel.app/#/"
          target="_blank"
          class="block w-1/3 border border-gray-300 rounded-3xl"
        >
          <div class="hover:scale-102 duration-500">
            <!-- Image -->
            <div class="p-6">
              <img
                src="/assets/img/component-design.webp"
                alt="Project Title"
                class="w-full"
              />
            </div>
            <!-- Text -->
            <div class="p-6 space-y-3">
              <h4 class="text-zinc-800 font-bold text-xl">
                Mastering Component Design in Vue: Best Practices and Tips
              </h4>

              <div class="flex items-center text-gray-700 text-xs">
                <i class="fas fa-calendar-alt mr-2"></i> November 25, 2024
              </div>
            </div>
          </div>
        </a>

        <!-- blog-2 -->
      </div>
      <!-- <div class="flex space-x-3"> -->
      <!-- <div class="w-1/3 bg-white">
        <img
          src="/assets/img/bg.jpg"
          alt="Blog Post Title"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            <a href="/blog/blog-post-1" class="hover:text-blue-600 transition"
              >How to Create a CSS Generator</a
            >
          </h3>
          <p class="text-gray-100 text-sm mb-4">
            Learn the step-by-step process of building a CSS generator using
            Quasar and Vue.js.
          </p>
          <div class="flex items-center text-gray-400 text-xs">
            <i class="fas fa-calendar-alt mr-2"></i> November 29, 2024
          </div>
        </div>
      </div> -->

      <!-- <div
        class="w-1/3 bg-white shadow-lg overflow-hidden hover:shadow-2xl transition"
      >
        <img
          src="/assets/img/bg.jpg"
          alt="Blog Post Title"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            <a href="/blog/blog-post-2" class="hover:text-blue-600 transition"
              >Mastering Tailwind CSS</a
            >
          </h3>
          <p class="text-gray-100 text-sm mb-4">
            Dive deep into the advanced features of Tailwind CSS and elevate
            your designs.
          </p>
          <div class="flex items-center text-gray-400 text-xs">
            <i class="fas fa-calendar-alt mr-2"></i> November 25, 2024
          </div>
        </div>
      </div> -->

      <!-- Add more blog posts as needed -->
      <!-- </div> -->

      <!-- <div class="mt-8 text-center">
        <a
          href="/blog"
          class="inline-block bg-blue-600 text-white py-2 px-6 hover:bg-blue-700 transition"
        >
          View All Posts
        </a>
      </div> -->
    </div>
  </section>
</template>
