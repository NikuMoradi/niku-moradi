<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <LeftPanel />

    <!-- Main Content Area -->
    <div class="flex flex-col w-full max-w-6xl px-6 py-6">
      <Menu />

      <!-- Scrollable Middle Section -->
      <main
        class="flex-1 overflow-y-auto bg-white rounded-lg shadow-lg p-6"
        style="background: linear-gradient(to bottom, #f9f9f9, #e9e9e9)"
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
