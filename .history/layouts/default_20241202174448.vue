<template>
  <div class="grid grid-rows-layout grid-cols-layout min-h-screen max-w-8xl">
    <!-- Left Panel: Always fixed on the left -->
    <aside class="bg-gray-100 h-screen px-4 py-6">
      <LeftPanel />
    </aside>

    <!-- Main Area -->
    <div class="grid grid-rows-main">
      <!-- Navbar: Always at the top -->
      <header class="bg-white shadow-md py-4 px-6">
        <Navbar />
      </header>

      <!-- Main Content: Scrollable -->
      <main class="overflow-y-auto p-6">
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
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Define a grid layout for the entire screen */
.grid {
  display: grid;
}

/* Layout for rows (Left Panel and Main Content) */
.grid-rows-layout {
  grid-template-rows: 1fr;
  grid-template-columns: 250px 1fr; /* Left panel: 250px, main: flexible */
}

/* Sub-layout for Main Area (Navbar and Main Content) */
.grid-rows-main {
  display: grid;
  grid-template-rows: auto 1fr; /* Navbar: auto height, Content: scrollable */
}
</style>
