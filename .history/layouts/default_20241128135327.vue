<template>
  <div class="flex flex-col min-h-screen">
    <!-- Menu at the top -->
    <div class="bg-gray-900 text-white p-4"></div>

    <div class="flex flex-1">
      <!-- Left Panel -->
      <div class="flex-none">
        <LeftPanel />
      </div>

      <!-- Main Content Area (Right of the left panel) -->
      <div class="flex-1 p-4"></div>
    </div>
  </div>

  <!-- Left panel -->
  <!-- menu and main content -->
  <div class="flex flex-col">
    <Menu />
    <NuxtPage />
  </div>
</template>

<script setup>
import LeftPanel from "~/components/LeftPanel.vue";
import Menu from "~/components/Menu.vue";
</script>

<style scoped>
/* Additional layout-specific styles */
</style>
