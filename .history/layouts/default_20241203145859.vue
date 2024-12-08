<template>
  <div
    class="max-w-8xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[400px] overflow-y-scroll"
  >
    <header class="fixed top-8 right-7 left-[25rem] xl:left-[30rem] z-20">
      <Navbar />
    </header>

    <aside class="fixed top-7 left-7">
      <LeftPanel />
    </aside>

    <main class="pl-[25rem] xl:pl-[30rem]">
      <NuxtPage />
    </main>
  </div>
</template>
