<template>
  <!-- First Menu (Visible on screens larger than 780) -->
  <div class="hidden 780:block">
    <div class="flex items-center justify-between">
      <!-- Menu Buttons -->
      <div class="flex items-center space-x-3">
        <!-- Home -->
        <NuxtLink
          to="/"
          class="780:py-4 780:px-4 1260:py-2 1260:px-5 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 dark:hover:text-slate-200"
          exact-active-class=" border text-gray-800 dark:text-slate-200 border-gray-400 dark:border-gray-800 "
        >
          <span class="hidden 1260:block duration-300">Home</span>
          <PhosphorIconHouseSimple
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>

        <!-- Education -->
        <NuxtLink
          to="/education"
          class="780:py-4 780:px-4 1260:py-2 1260:px-5 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 dark:hover:text-slate-200"
          exact-active-class=" border   text-gray-800 dark:text-slate-200 border-gray-400 dark:border-gray-800 "
        >
          <span class="hidden 1260:block duration-300"> Education</span>
          <PhosphorIconArticle
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>

        <!-- Projects -->
        <NuxtLink
          to="/projects"
          class="780:py-4 780:px-4 1260:py-2 1260:px-5 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 dark:hover:text-slate-200"
          exact-active-class=" border   text-gray-800 dark:text-slate-200 border-gray-400 dark:border-gray-800 "
        >
          <span class="hidden 1260:block duration-300"> Projects</span>
          <PhosphorIconSquaresFour
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>
        <!-- Contact -->
        <NuxtLink
          to="/contact"
          class="780:py-4 780:px-4 1260:py-2 1260:px-5 text-lg text-gray-500 backdrop-blur-md rounded-3xl font-semibold tracking-wide hover:text-gray-700 dark:hover:text-slate-200"
          exact-active-class="   border text-gray-800 dark:text-slate-200 border-gray-400 dark:border-gray-800 "
        >
          <span class="hidden 1260:block duration-300"> Contact</span>
          <PhosphorIconEnvelope
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>
      </div>

      <!-- Dark Mode and Talk Buttons -->
      <div class="flex space-x-2 items-center">
        <button
          @click="toggleTheme"
          class="px-4 h-11 text-gray-500 backdrop-blur-md rounded-full hover:text-gray-700 dark:hover:text-slate-200 transition duration-300"
        >
          <PhosphorIconMoonStars
            class="block dark:hidden"
            :size="20"
            weight="bold"
          />

          <PhosphorIconSun class="hidden dark:block" :size="20" weight="bold" />
        </button>
        <a
          href="mailto:NikuMoradi@gmail.com"
          class="flex items-center max-[800px]:text-sm space-x-2 780:py-2 780:px-5 rounded-3xl text-lg text-slate-100 bg-color-light dark:bg-color-dark hover:opacity-90 transition duration-300"
        >
          <span>Let's Talk</span>
          <PhosphorIconChatDots :size="20" weight="bold" />
        </a>
      </div>
    </div>
  </div>

  <!-- Second Menu (Visible on screens smaller than 780) -->
  <div class="block 780:hidden">
    <div class="flex items-center">
      <!-- Menu Buttons -->
      <div
        class="flex items-center h-11 space-x-2 text-gray-500 backdrop-blur-md rounded-3xl"
      >
        <!-- Home -->
        <NuxtLink
          to="/"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black dark:bg-slate-100  text-white dark:text-gray-900  "
        >
          <PhosphorIconHouseSimple
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>

        <!-- Education -->
        <NuxtLink
          to="/education"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black dark:bg-slate-100  text-white dark:text-gray-900  "
        >
          <PhosphorIconArticle
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>

        <!-- Projects -->
        <NuxtLink
          to="/projects"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black dark:bg-slate-100  text-white dark:text-gray-900  "
        >
          <PhosphorIconSquaresFour
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>

        <!-- Contact -->
        <NuxtLink
          to="/contact"
          class="py-3 px-4 rounded-3xl"
          exact-active-class=" bg-black dark:bg-slate-100  text-white dark:text-gray-900  "
        >
          <PhosphorIconEnvelope
            class="block 1260:hidden"
            :size="20"
            weight="bold"
          />
        </NuxtLink>
        <div class="flex justify-center items-center pl-3 space-x-3">
          <button @click="toggleTheme">
            <PhosphorIconMoonStars
              class="block dark:hidden"
              :size="20"
              weight="bold"
            />
            <PhosphorIconSun
              class="hidden dark:block"
              :size="20"
              weight="bold"
            />
          </button>

          <a
            href="mailto:NikuMoradi@gmail.com"
            class="px-4 py-3 rounded-full text-slate-100 bg-color-light dark:text-color-dark"
          >
            <PhosphorIconChatDots :size="20" weight="bold" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(true);

// Toggle between dark and light modes
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark"); // Add dark class to html tag
    // localStorage.setItem("theme", "dark"); // Add dark property to Local storage
  } else {
    document.documentElement.classList.remove("dark");
    // localStorage.setItem("theme", "light");
  }
};

// Check and set the initial theme based on local storage
onMounted(() => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
    isDarkMode.value = true;
  }
});
</script>
