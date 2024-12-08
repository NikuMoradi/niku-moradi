<template>
  <div class="flex justify-center items-center min-h-screen">
    <!-- Left panel -->
    <LeftPanel />

    <!-- Menu and main content -->
    <div class="flex flex-col w-full max-w-6xl mx-auto">
      <Menu />
      <!-- Scrollable and Fixed Card Container -->
      <main
        class="flex-1 p-6 overflow-auto max-h-[700px] bg-white rounded-lg shadow-lg"
      >
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import LeftPanel from "~/components/LeftPanel.vue";
import Menu from "~/components/Menu.vue";
</script>

<style scoped>
/* Optional: additional styling for the layout */
.main-content {
  max-width: 100%;
  overflow-y: auto;
}
</style>
