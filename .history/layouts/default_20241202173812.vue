<template>
  <!-- Global Container -->
  <div
    class="relative flex min-h-screen max-w-8xl px-10 overflow-hidden justify-center items-center space-x-5"
  >
    <div class="fixed left-0 flex-shrink-0">
      <!-- THis Panel is always at the left side and never move up and down  -->
      <LeftPanel />
    </div>
    <div class="ml-64 flex flex-col flex-1">
      <div class="z-20 w-full">
        <!-- This Navbar is always at the top and the main content scrolls behind it -->
        <Navbar />
      </div>
      <div class="min-h-screen overflow-y-auto w-[200">
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
