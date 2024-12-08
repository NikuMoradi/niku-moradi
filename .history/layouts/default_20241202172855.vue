<template>
  <!-- Global Container -->
  <div class="relative flex min-h-screen max-w-8xl overflow-hidden">
    <!-- Left Panel: Fixed to the left -->
    <div class="flex-shrink-0 fixed top-0 left-0 h-screen w-64 bg-gray-100">
      <LeftPanel />
    </div>

    <!-- Main Content Area -->
    <div class="ml-64 flex flex-col flex-1">
      <!-- Navbar: Sticky at the top -->
      <div class="sticky top-0 z-10 w-full bg-white shadow-md">
        <Navbar />
      </div>

      <!-- Main Content: Scrollable -->
      <div class="flex-1 overflow-y-auto p-6">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          illum cumque corrupti. Earum laudantium soluta ut eum maxime unde iure
          accusantium porro ratione voluptatum eius, consequuntur alias
          voluptate. Dolorum, recusandae!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          illum cumque corrupti. Earum laudantium soluta ut eum maxime unde iure
          accusantium porro ratione voluptatum eius, consequuntur alias
          voluptate. Dolorum, recusandae!
        </p>
        <!-- Add more content here -->
      </div>
    </div>
  </div>
</template>
