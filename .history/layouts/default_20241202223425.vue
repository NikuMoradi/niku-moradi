<template>
  <div class="flex max-w-8xl">
    <header class="w-full">
      <Navbar />
    </header>

    <aside class="w-380 h-screen fixed top-7 left-7">
      <LeftPanel />
    </aside>

    <main class="pl-[30rem]">
      <NuxtPage />
    </main>
  </div>
</template>
