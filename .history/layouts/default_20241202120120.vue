<template>
  <div class="flex h-screen">
    <!-- Left Sidebar -->
    <aside class="w-64 bg-gray-100 hidden md:block">
      <slot name="sidebar" />
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Navbar -->
      <header class="bg-white shadow px-4 py-2">
        <slot name="navbar" />
      </header>

      <!-- Main Page Content -->
      <main class="flex-1 overflow-y-auto px-4 py-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
