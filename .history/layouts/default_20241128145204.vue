<template>
  <div class="flex w-full min-h-screen bg-white">
    <!-- Left panel -->
    <LeftPanel />

    <!-- menu and main content -->
    <div class="flex flex-col">
      <Menu />
      <NuxtPage />
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
