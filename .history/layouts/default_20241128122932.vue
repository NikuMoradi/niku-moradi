<template>
  <template>
    <div class="flex flex-col min-h-screen">
      <!-- Menu at the top (Global Menu) -->
      <menu class="bg-gray-800 text-white p-4">
        <h1 class="text-xl">Menu</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </menu>

      <div class="flex flex-1">
        <!-- Left Panel -->
        <div class="bg-gray-700 text-white w-64 p-4">
          <h2 class="text-lg">Left Panel</h2>
          <ul>
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 p-4">
          <Nuxt />
        </div>
      </div>

      <!-- Footer at the bottom -->
      <footer class="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  </template>

  <script setup>
    // You can import any required components here
  </script>

  <style scoped>
    /* You can add some layout-specific styles here */
  </style>
</template>
