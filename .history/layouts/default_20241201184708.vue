<template>
  <div class="relative min-h-screen">
    <!-- Left Section (Blue) -->
    <div class="fixed top-0 left-0 bg-blue-300 w-1/4 h-full p-4 z-10">
      <LeftPanel />
    </div>

    <!-- Right Section (Green and Red) -->
    <div class="ml-1/4 pl-4 pt-16">
      <!-- Green Section (Fixed at the top) -->
      <div class="fixed top-0 left-1/4 right-0 w-3/4 p-4 z-20">
        <Navbar />
      </div>

      <!-- Red Section (Dynamic Content) -->
      <div
        class="mt-24 p-4 bg-red-300 w-full h-full z-0 absolute top-0 left-1/4 right-0 overflow-auto"
      >
        <h2 class="text-xl">Red Section</h2>
        <p>
          This is dynamic content that will scroll behind the green section.
        </p>
        <p>Keep adding content to see the scroll effect.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</template>
