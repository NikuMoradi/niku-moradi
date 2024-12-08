<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-48 h-screen bg-green-800 text-white fixed">
      <a
        href="#home"
        class="block text-white no-underline px-4 py-2 mb-2 hover:bg-green-700 transition-colors"
      >
        Home
      </a>
      <a
        href="#tutorials"
        class="block text-white no-underline px-4 py-2 mb-2 hover:bg-green-700 transition-colors"
      >
        Tutorials
      </a>
      <a
        href="#courses"
        class="block text-white no-underline px-4 py-2 mb-2 hover:bg-green-700 transition-colors"
      >
        Courses
      </a>
      <a
        href="#jobs"
        class="block text-white no-underline px-4 py-2 mb-2 hover:bg-green-700 transition-colors"
      >
        Jobs
      </a>
      <a
        href="#about"
        class="block text-white no-underline px-4 py-2 mb-2 hover:bg-green-700 transition-colors"
      >
        About
      </a>
      <a
        href="#contact"
        class="block text-white no-underline px-4 py-2 mb-2 hover:bg-green-700 transition-colors"
      >
        Contact
      </a>
    </div>

    <!-- Main Content -->
    <div class="flex-1 pl-48 p-5 text-justify">
      <NuxtPage />
      <div id="tutorials">
        <h1 class="text-2xl font-bold mb-4">HTML</h1>
        <p>
          HTML stands for HyperText Markup Language. It is used to design the
          web pages. With the help of HTML, you can create a complete website
          structure. HTML is the combination of Hypertext and Markup language.
          Hypertext defines the link between the web pages and markup language
          defines the text document within the tag that define the structure of
          web pages.
        </p>
      </div>
    </div>
  </div>
</template>
