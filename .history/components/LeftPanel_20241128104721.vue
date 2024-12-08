<template>
  <div class="flex items-center h-screen">
    <div
      class="bg-gray-800 text-white h-[95vh] w-64 ml-4 rounded-xl shadow-lg flex flex-col justify-between"
    >
      <!-- Top Section -->
      <div>
        <!-- Profile Picture -->
        <div class="p-4 flex justify-center">
          <div
            class="p-4 bg-cover bg-center h-24 w-24 rounded-full border-4 border-gray-700"
            style="
              background-image: url('/assets/img/photo_2024-11-28_10-37-05.jpg');
            "
          ></div>
        </div>

        <!-- Biography -->
        <div class="p-4 text-center">
          <h2 class="text-lg font-bold">Niku Moradi</h2>
          <p class="text-sm text-gray-400">Frontend Developer</p>
          <p class="text-sm text-gray-400">Age: 26</p>
          <p class="text-sm text-gray-400">Kermanshah</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-4 border-t border-gray-700 text-center">
        <p class="text-sm">© 2024 Niku Moradi</p>
      </div>
    </div>
  </div>
</template>
