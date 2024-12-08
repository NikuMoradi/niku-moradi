<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-380 h-screen bg-green-800 text-white fixed">
      <LeftPanel />
    </div>

    <!-- Main Content -->
    <div class="flex-1 pl-150 p-5 text-justify">
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
