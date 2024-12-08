<template>
  <!-- Hero Section -->
  <div
    class="w-full h-[50vh] flex flex-col justify-left p-16 text-gray-50 bg-opacity-60"
  >
    <!--  SVG -->
    <div class="w-[30rem] h-[35rem] absolute right-0 top-0">
      <img src="/assets/img/svg-top.svg" alt="" />
    </div>
    <p>Hi my new friend!</p>
    <h1 class="text-5xl font-bold tracking-wide leading-normal">
      Discover my art space!
    </h1>
    <p class="text-lg font-medium">
      I am a
      <span
        id="dynamicText"
        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 font-bold"
      ></span>
    </p>
    <div class="w-30 text-right">
      <button
        class="bg-lime-300 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded"
      >
        Explore My Work
      </button>
    </div>
  </div>
  <!-- Experience Section -->
  <div class="w-full py-16">
    <h2 class="text-3xl font-semibold text-left mb-7 text-white">
      My Experience
    </h2>
    <div class="flex space-x-9">
      <!-- Education -->
      <div
        class="w-1/3 p-6 bg-black bg-opacity-60 text-white shadow-lg hover:shadow-xl transition"
      >
        <div class="text-2xl text-blue-500 mb-4">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <h3 class="text-md font-semibold mb-2">
          Bachelor's Degree in Software Engineering
        </h3>
        <p class="text-sm text-gray-400">
          University of Kurdistan (2019 - 2023)
        </p>
        <p
          class="mt-4 text-xs tracking-widest leading-5 font-light text-gray-100"
        >
          Gained a deep understanding of software development principles,
          including advanced algorithms, system design, and programming in
          multiple languages. Completed various projects in different
          programming languages and worked on problem-solving methodologies.
        </p>
      </div>

      <!-- Internship -->
      <div
        class="w-1/3 p-6 bg-black bg-opacity-60 text-white shadow-lg hover:shadow-xl transition"
      >
        <div class="text-4xl text-green-500 mb-4">
          <i class="fas fa-briefcase"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          Frontend Development Internship
        </h3>
        <p class="text-sm text-gray-400">
          Kermanshah Science and Technology Building (2023 - 2024)
        </p>
        <p
          class="mt-4 text-xs tracking-widest leading-5 font-light text-gray-100"
        >
          Collaborated with a senior developer on a real-world project,
          contributing to the development of components for a software platform
          similar to Microsoft Power Apps. Gained hands-on experience in
          building modular components with Quasar, with a focus on layout
          design, functionality, and optimizing user experience.
        </p>
      </div>

      <!-- Udemy Courses -->
      <div
        class="w-1/3 p-6 bg-black bg-opacity-60 text-white shadow-lg hover:shadow-xl transition"
      >
        <div class="text-4xl text-purple-500 mb-4">
          <i class="fas fa-book"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">Udemy Courses</h3>
        <p class="text-sm text-gray-400">Ongoing Learning (2023 - Present)</p>

        <ul
          class="text-xs tracking-widest leading-5 font-light list-disc pl-5 mt-2 text-gray-100"
        >
          <li>HTML & CSS: Mastered responsive web design.</li>
          <li>JavaScript: Developed interactive front-end applications.</li>
          <li>Vue.js: Built single-page applications and managed state.</li>
          <li>
            Git: Used version control for collaboration and project management.
          </li>
          <li>
            Tailwind: Employed utility-first CSS framework for rapid UI design.
          </li>
          <li>
            Algorithms: Strengthened problem-solving and computational thinking.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Projects Section -->
  <div class="w-full px-6 py-16">
    <h2 class="text-3xl font-semibold text-left mb-12">My Projects</h2>

    <div class="flex space-x-3">
      <!-- Project 1: CSS Generator -->
      <div class="bg-white shadow-lg overflow-hidden w-1/3">
        <img
          src="/assets/img/bg.jpg"
          alt="CSS Generator"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">CSS Generator</h3>
          <p class="text-gray-100 mb-4">
            A powerful tool for generating CSS styles, built with Quasar
            Framework.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-2 py-1 bg-gray-200 text-gray-100 text-sm rounded"
              >Quasar</span
            >
            <span class="px-2 py-1 bg-gray-200 text-gray-100 text-sm rounded"
              >CSS</span
            >
            <span class="px-2 py-1 bg-gray-200 text-gray-100 text-sm rounded"
              >Vue.js</span
            >
          </div>
          <a
            href="https://your-css-generator-link.com"
            target="_blank"
            class="block text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      <!-- Project 2: Shoe Store -->
      <div class="bg-white shadow-lg overflow-hidden w-1/3">
        <img
          src="/assets/img/IMG_20241128_102220_249.jpg"
          alt="Shoe Store"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Shoe Store</h3>
          <p class="text-gray-100 mb-4">
            An e-commerce web application for browsing and purchasing shoes.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-2 py-1 bg-gray-200 text-gray-100 text-sm rounded"
              >Vue.js</span
            >
            <span class="px-2 py-1 bg-gray-200 text-gray-100 text-sm rounded"
              >Tailwind CSS</span
            >
            <span class="px-2 py-1 bg-gray-200 text-gray-100 text-sm rounded"
              >JavaScript</span
            >
          </div>
          <a
            href="https://your-shoe-store-link.com"
            target="_blank"
            class="block text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Blog Section -->
  <div class="w-full px-6 py-16">
    <h2 class="text-3xl font-semibold text-left mb-12">My Blog</h2>

    <div class="flex space-x-3">
      <!-- Blog Post 1 -->
      <div
        class="w-1/3 bg-white shadow-lg overflow-hidden hover:shadow-2xl transition"
      >
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
      </div>

      <!-- Blog Post 2 -->
      <div
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
      </div>

      <!-- Add more blog posts as needed -->
    </div>

    <div class="mt-8 text-center">
      <a
        href="/blog"
        class="inline-block bg-blue-600 text-white py-2 px-6 hover:bg-blue-700 transition"
      >
        View All Posts
      </a>
    </div>
  </div>
</template>
<script>
import Typed from "typed.js";

export default {
  mounted() {
    const options = {
      strings: ["Designer", "Developer", "Creator"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    new Typed("#dynamicText", options);
  },
};
</script>

<style></style>
