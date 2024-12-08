<template>
  <div class="projects-page">
    <h1 class="text-4xl font-bold text-center mb-6">My Projects</h1>

    <div class="projects-content text-lg text-gray-700 space-y-8">
      <!-- Project 1 -->
      <div class="project-entry">
        <h2 class="text-3xl font-semibold">Project 1: E-commerce Website</h2>
        <p class="text-gray-500">July 2023 - Present</p>
        <p>
          An e-commerce website built using Vue.js and Nuxt.js. The website
          allows users to browse products, add items to their cart, and proceed
          to checkout. It features a clean and responsive design, ensuring a
          seamless shopping experience.
        </p>
        <ul class="list-disc pl-6">
          <li>
            Built with Vue.js for the front-end and integrated with a RESTful
            API for product data.
          </li>
          <li>
            Implemented responsive design for mobile and desktop users using
            Tailwind CSS.
          </li>
          <li>
            Optimized site performance, reducing load time by 40% through code
            splitting and lazy loading.
          </li>
        </ul>
        <p>
          <a
            href="https://project-demo.com"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
            >View Demo</a
          >
          |
          <a
            href="https://github.com/username/project1"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
            >View Code</a
          >
        </p>
      </div>

      <!-- Project 2 -->
      <div class="project-entry">
        <h2 class="text-3xl font-semibold">Project 2: Personal Blog</h2>
        <p class="text-gray-500">March 2023 - June 2023</p>
        <p>
          A personal blog platform where users can write, edit, and publish blog
          posts. Built with Nuxt.js and Markdown to allow users to write content
          easily and deploy it with minimal setup.
        </p>
        <ul class="list-disc pl-6">
          <li>
            Created with Nuxt.js, utilizing the static site generation (SSG)
            feature for SEO optimization.
          </li>
          <li>
            Built a custom markdown parser for writing blog posts and rendering
            them in the browser.
          </li>
          <li>
            Added a commenting system powered by Disqus to increase engagement.
          </li>
        </ul>
        <p>
          <a
            href="https://project-blog.com"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
            >View Demo</a
          >
          |
          <a
            href="https://github.com/username/project2"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
            >View Code</a
          >
        </p>
      </div>

      <!-- Project 3 -->
      <div class="project-entry">
        <h2 class="text-3xl font-semibold">Project 3: Portfolio Website</h2>
        <p class="text-gray-500">January 2023 - March 2023</p>
        <p>
          A personal portfolio website to showcase my work and projects. It
          features an interactive design with smooth animations and a contact
          form for potential clients.
        </p>
        <ul class="list-disc pl-6">
          <li>
            Developed with Vue.js and Vue Router for seamless navigation between
            sections.
          </li>
          <li>
            Implemented smooth scroll and parallax animations for a dynamic user
            experience.
          </li>
          <li>
            Contact form integrates with EmailJS to send emails directly from
            the site.
          </li>
        </ul>
        <p>
          <a
            href="https://my-portfolio.com"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
            >View Demo</a
          >
          |
          <a
            href="https://github.com/username/portfolio"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
            >View Code</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can import components here if needed
</script>

<style scoped>
.projects-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.projects-content {
  line-height: 1.8;
  color: #2d3748;
}

.project-entry {
  margin-top: 40px;
}

.project-entry h2 {
  font-size: 1.75rem;
  color: #2d3748;
}

.project-entry p {
  margin-bottom: 1rem;
}

.project-entry ul {
  margin-top: 10px;
}

.project-entry ul li {
  margin-bottom: 8px;
}

.project-entry a {
  text-decoration: none;
}
</style>
