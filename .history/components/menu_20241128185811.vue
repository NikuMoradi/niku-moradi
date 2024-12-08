<template>
  <div class="flex items-center bg-black text-white px-1 py-1 rounded-lg">
    <!-- About -->
    <NuxtLink
      to="/about.vue"
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
      exact-active-class="bg-white text-black"
    >
      About
    </NuxtLink>

    <!-- Experience -->
    <NuxtLink
      to="/experience.vue"
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
      exact-active-class="bg-white text-black"
    >
      Experience
    </NuxtLink>

    <!-- Projects -->
    <NuxtLink
      to="/projects.vue"
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
      exact-active-class="bg-white text-black"
    >
      Projects
    </NuxtLink>

    <!-- Blog -->
    <NuxtLink
      to="/blog.vue"
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
      exact-active-class="bg-white text-black"
    >
      Blog
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
