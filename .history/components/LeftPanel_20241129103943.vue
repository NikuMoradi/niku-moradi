<template>
  <div
    class="bg-neutral-800 text-white w-80 flex flex-col"
    style="height: calc(100vh - 40px)"
  >
    <!-- Header-->
    <div class="p-4 flex flex-col items-center justify-center bg-neutral-900">
      <img
        src="../assets/img/photo_2024-11-28_10-37-05.jpg"
        alt="Profile Picture"
        class="w-48 h-48 mb-5 rounded-lg border-4 border-gray-700 object-cover object-center"
      />
      <h2
        class="text-gray-100 text-[16px] font-semibold tracking-widest leading-[16.8px] mb-3"
      >
        Niku Moradi
      </h2>
      <p
        class="text-gray-400 text-[11px] font-light tracking-wider leading-[16.5px]"
      >
        Software Engineer
      </p>
      <p
        class="text-gray-400 text-[11px] font-light tracking-wider leading-[16.5px]"
      >
        Frontend Developer
      </p>
    </div>

    <!-- table -->
    <div class="p-10 border-b border-gray-700">
      <div class="flex flex-row justify-between">
        <p>Age</p>
        <p>26</p>
      </div>
    </div>

    <!-- Social Links -->
    <div class="py-8 text-center mt-auto text-white">
      <div class="space-x-4">
        <a
          href="https://t.me/yourusername"
          target="_blank"
          class="text-white hover:text-blue-400"
        >
          <i class="fab fa-telegram fa-lg"></i>
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
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a href="tel:+1234567890" class="text-white hover:text-green-400">
          <i class="fas fa-phone-alt fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>
