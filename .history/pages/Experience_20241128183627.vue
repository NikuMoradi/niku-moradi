<template>
  <div class="experience-page">
    <h1 class="text-4xl font-bold text-center mb-6">My Experience</h1>

    <div class="experience-content text-lg text-gray-700 space-y-8">
      <!-- Job 1 -->
      <div class="job-entry">
        <h2 class="text-3xl font-semibold">Frontend Developer | ABC Company</h2>
        <p class="text-gray-500">January 2022 - Present</p>
        <p>
          At ABC Company, I work as a Frontend Developer, where I am responsible
          for designing and implementing responsive web applications using
          Vue.js and Nuxt.js. I collaborate with cross-functional teams to
          deliver high-quality web experiences and ensure that applications are
          optimized for both performance and SEO.
        </p>
        <ul class="list-disc pl-6">
          <li>
            Developed a large-scale e-commerce web application using Vue.js and
            Nuxt.js.
          </li>
          <li>
            Integrated RESTful APIs for dynamic data fetching and smooth user
            experience.
          </li>
          <li>
            Optimized website for SEO and performance improvements, resulting in
            a 30% increase in page load speed.
          </li>
        </ul>
      </div>

      <!-- Job 2 -->
      <div class="job-entry">
        <h2 class="text-3xl font-semibold">Junior Web Developer | XYZ Ltd</h2>
        <p class="text-gray-500">August 2020 - December 2021</p>
        <p>
          At XYZ Ltd, I worked as a Junior Web Developer, focusing on the
          front-end development of dynamic websites. I gained experience with
          HTML5, CSS3, JavaScript, and Vue.js while collaborating with senior
          developers to create user-friendly and visually appealing websites.
        </p>
        <ul class="list-disc pl-6">
          <li>
            Worked closely with the design team to ensure smooth UI/UX for all
            web applications.
          </li>
          <li>
            Built reusable and modular components using Vue.js to improve
            efficiency.
          </li>
          <li>
            Improved website accessibility and ensured compliance with WCAG
            standards.
          </li>
        </ul>
      </div>

      <!-- Job 3 -->
      <div class="job-entry">
        <h2 class="text-3xl font-semibold">
          Intern Web Developer | Tech Solutions
        </h2>
        <p class="text-gray-500">June 2019 - August 2020</p>
        <p>
          During my internship at Tech Solutions, I learned the fundamentals of
          web development while assisting with front-end tasks on various
          projects. I contributed to building simple websites and learned about
          version control and collaborative development practices.
        </p>
        <ul class="list-disc pl-6">
          <li>
            Assisted in building landing pages and marketing websites using
            HTML, CSS, and JavaScript.
          </li>
          <li>
            Collaborated with developers using Git and GitHub for version
            control.
          </li>
          <li>
            Optimized images and media for better performance and faster load
            times.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can import components here if needed
</script>

<style scoped>
.experience-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.experience-content {
  line-height: 1.8;
  color: #2d3748;
}

.job-entry {
  margin-top: 40px;
}

.job-entry h2 {
  font-size: 1.75rem;
  color: #2d3748;
}

.job-entry p {
  margin-bottom: 1rem;
}

.job-entry ul {
  margin-top: 10px;
}

.job-entry ul li {
  margin-bottom: 8px;
}
</style>
