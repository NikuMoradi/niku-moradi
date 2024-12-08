<template>
  <div class="blog-page">
    <h1 class="text-4xl font-bold text-center mb-6">My Blog</h1>

    <div class="blog-posts space-y-8">
      <!-- Blog Post 1 -->
      <div class="blog-post-entry">
        <h2 class="text-3xl font-semibold">
          <NuxtLink
            to="/blog/my-first-post"
            class="text-blue-600 hover:text-blue-800"
          >
            My First Blog Post
          </NuxtLink>
        </h2>
        <p class="text-gray-500">Published: March 10, 2024</p>
        <p>
          This is the first blog post on my website! In this post, I discuss my
          journey as a developer, the tools I use, and my goals for the future.
        </p>
        <NuxtLink
          to="/blog/my-first-post"
          class="text-blue-600 hover:text-blue-800"
        >
          Read more
        </NuxtLink>
      </div>

      <!-- Blog Post 2 -->
      <div class="blog-post-entry">
        <h2 class="text-3xl font-semibold">
          <NuxtLink
            to="/blog/understanding-vue"
            class="text-blue-600 hover:text-blue-800"
          >
            Understanding Vue.js
          </NuxtLink>
        </h2>
        <p class="text-gray-500">Published: February 25, 2024</p>
        <p>
          In this post, I explain the core concepts of Vue.js and why it's one
          of the most popular frameworks for building modern web applications.
        </p>
        <NuxtLink
          to="/blog/understanding-vue"
          class="text-blue-600 hover:text-blue-800"
        >
          Read more
        </NuxtLink>
      </div>

      <!-- Blog Post 3 -->
      <div class="blog-post-entry">
        <h2 class="text-3xl font-semibold">
          <NuxtLink
            to="/blog/intro-to-tailwind-css"
            class="text-blue-600 hover:text-blue-800"
          >
            Introduction to Tailwind CSS
          </NuxtLink>
        </h2>
        <p class="text-gray-500">Published: February 10, 2024</p>
        <p>
          Tailwind CSS is a utility-first CSS framework that makes it easy to
          build custom designs. In this post, I show how to get started with
          Tailwind and create responsive layouts.
        </p>
        <NuxtLink
          to="/blog/intro-to-tailwind-css"
          class="text-blue-600 hover:text-blue-800"
        >
          Read more
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can import components here if needed
</script>

<style scoped>
.blog-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.blog-posts {
  line-height: 1.8;
  color: #2d3748;
}

.blog-post-entry {
  margin-top: 40px;
}

.blog-post-entry h2 {
  font-size: 1.75rem;
  color: #2d3748;
}

.blog-post-entry p {
  margin-bottom: 1rem;
}

.blog-post-entry a {
  text-decoration: none;
  font-weight: bold;
}
</style>
