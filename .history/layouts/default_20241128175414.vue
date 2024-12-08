<template>
  <div class="flex justify-center items-center min-h-screen">
    <!-- container -->
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
