<template>
  <div class="flex max-w-8xl">
    <header class="fixed top-8 right-7 z-10 left-[30rem]">
      <Navbar />
    </header>

    <aside class="h-screen fixed top-7 left-7">
      <LeftPanel />
    </aside>

    <main class="pl-[30rem]">
      <NuxtPage />
    </main>
  </div>
</template>
