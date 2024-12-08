<template>
  <div class="flex items-center h-screen">
    <div
      class="bg-gray-800 text-white h-[95vh] w-64 ml-4 rounded-xl shadow-lg flex flex-col"
    >
      <div>
        <!-- Profile Picture -->
        <div class="p-4 flex justify-center">
          <img
            src="../assets/img/photo_2024-11-28_10-37-05.jpg"
            alt="Profile Picture"
            class="w-48 h-48 rounded-lg border-4 border-gray-700 object-cover object-center"
          />
        </div>

        <!-- Biography -->
        <div class="p-4 text-center">
          <h2 class="text-lg font-bold">Niku Moradi</h2>
          <p class="text-sm text-gray-400">Frontend Developer</p>
          <p class="text-sm text-gray-400">Age: 26</p>
          <p class="text-sm text-gray-400">Kermanshah</p>
        </div>
      </div>
      <!-- Social Links -->
      <div class="p-4 border-t border-gray-700 text-center">
        <div class="space-x-4">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            class="text-white hover:text-blue-400"
          >
            <i class="fab fa-telegram"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            class="text-white hover:text-blue-600"
          >
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="text-white hover:text-gray-700"
          >
            <i class="fab fa-github"></i>
          </a>
          <a href="tel:+1234567890" class="text-white hover:text-green-400">
            <i class="fas fa-phone-alt"></i>
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-4 border-t border-gray-700 text-center">
        <p class="text-sm">© 2024 Niku Moradi</p>
      </div>
    </div>
  </div>
</template>
