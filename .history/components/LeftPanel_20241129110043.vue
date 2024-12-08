<template>
  <div
    class="bg-neutral-800 text-white w-80 flex flex-col items-center"
    style="height: calc(100vh - 40px)"
  >
    <!-- Header-->
    <div
      class="flex flex-col items-center justify-center bg-neutral-900 w-full"
    >
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

    <div class="flex flex-col w-3/4">
      <!-- table -->
      <div class="py-5 text-xs">
        <ul class="space-y-2">
          <li class="flex justify-between">
            <h6>Residence:</h6>
            <span class="text-gray-400">Iran</span>
          </li>
          <li class="flex justify-between">
            <h6>City:</h6>
            <span class="text-gray-400">Kermanshah</span>
          </li>
          <li class="flex justify-between">
            <h6>Age:</h6>
            <span class="text-gray-400">26</span>
          </li>
        </ul>
      </div>
      <!-- divider -->
      <div class="w-full h-px bg-gray-600 opacity-30"></div>
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
