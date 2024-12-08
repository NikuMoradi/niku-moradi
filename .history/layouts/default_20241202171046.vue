<template>
  <!-- Global Container -->
  <div
    class="relative flex min-h-screen max-w-8xl mx-auto overflow-hidden justify-center items-center space-x-5"
  >
    <div class="flex-shrink-0">
      <!-- THis Panel is always at the left side and never move up and down  -->
      <LeftPanel />
    </div>
    <div class="flex flex-col items-center">
      <div class="sticky top-0 z-20">
        <!-- This Navbar is always at the top and the main content scrolls behind it -->
        <Navbar />
      </div>
      <div class="min-h-screen overflow-y-auto">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Optional custom styles */
</style>
