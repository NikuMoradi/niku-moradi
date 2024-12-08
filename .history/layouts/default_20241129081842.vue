<template>
  <div class="flex justify-center items-center min-h-screen">
    <!-- Left panel -->
    <LeftPanel />
  </div>
</template>

<script setup>
import LeftPanel from "~/components/LeftPanel.vue";
</script>

<style scoped>
/* Optional: additional styling for the layout */
.main-content {
  max-width: 100%;
  overflow-y: auto;
}
</style>
