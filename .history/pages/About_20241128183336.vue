<template>
  <div class="about-page">
    <h1 class="text-4xl font-bold text-center mb-6">About Me</h1>

    <div class="about-content text-lg text-gray-700 space-y-4">
      <p>
        Hello! I'm Niku Moradi, a passionate Frontend Developer based in
        Kermanshah. I specialize in building modern web applications using
        JavaScript frameworks like Vue.js and Nuxt.js. I enjoy creating
        intuitive and responsive user interfaces that deliver seamless
        experiences across devices.
      </p>

      <p>
        I started my journey in software development a few years ago, and since
        then, I have been continuously learning and exploring new technologies.
        I'm particularly interested in Vue.js and its ecosystem, which has been
        a game changer in my web development workflow.
      </p>

      <p>
        In my free time, I love reading, listening to podcasts, and working out.
        I'm always eager to connect with like-minded developers, and I'm open to
        new opportunities.
      </p>

      <div class="skills">
        <h2 class="text-3xl font-semibold mt-6">Skills</h2>
        <ul class="list-disc pl-6">
          <li>JavaScript (ES6+)</li>
          <li>Vue.js & Nuxt.js</li>
          <li>HTML5, CSS3 (Sass, Tailwind CSS)</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Node.js & Express.js (Basic)</li>
        </ul>
      </div>

      <div class="contact-info mt-8">
        <h2 class="text-3xl font-semibold">Contact Me</h2>
        <p>
          If you'd like to get in touch or collaborate on a project, feel free
          to reach out!
        </p>
        <p class="text-blue-500">
          <a href="mailto:nikumoradi@example.com">nikumoradi@example.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can import components here if needed
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-content {
  line-height: 1.8;
  color: #2d3748;
}

.skills {
  margin-top: 20px;
}

.contact-info a {
  text-decoration: underline;
}
</style>
