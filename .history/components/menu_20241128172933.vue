<template>
  <div class="flex items-center bg-black text-white px-1 py-1 rounded-lg">
    <div class="font-medium rounded-lg px-10 py-2 bg-white text-black">
      <NuxtLink to="/About" ">About</NuxtLink>

    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
    <NuxtLink to="/Experience" >Experience</NuxtLink>
    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/Projects">Projects</NuxtLink>

    </div>
    <div
      class="font-medium rounded-lg px-10 py-2 hover:bg-white hover:text-black"
    >
      <NuxtLink to="/Blog" >Blog</NuxtLink>

    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>
