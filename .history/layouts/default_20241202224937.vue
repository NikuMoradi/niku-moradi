<template>
  <div class="flex max-w-8xl">
    <header class="w-full fixed top-8 right-8 z-10 pl-[28rem]">
      <Navbar />
    </header>

    <aside class="w-370 h-screen fixed top-7 left-8">
      <LeftPanel />
    </aside>

    <main class="pl-[28rem]">
      <NuxtPage />
    </main>
  </div>
</template>
