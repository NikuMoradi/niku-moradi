<template>
  <div class="flex max-w-8xl">
    <aside class="w-380 h-screen fixed top-7 left-7">
      <LeftPanel />
    </aside>

    <Navbar class="fixed top-8 right-0 z-10 pl-[30rem]" />

    <main class="pl-[30rem]">
      <NuxtPage />
    </main>
  </div>
</template>
