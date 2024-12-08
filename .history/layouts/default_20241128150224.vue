<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- container -->
    <div class="flex bg-white rounded-xl shadow-lg px-10">
      <!-- Left panel -->
      <LeftPanel />

      <!-- menu and main content -->
      <div class="flex flex-col">
        <Menu />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftPanel from "~/components/LeftPanel.vue";
import Menu from "~/components/Menu.vue";
</script>

<style scoped>
/* Additional layout-specific styles */
</style>
