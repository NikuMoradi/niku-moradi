<template>
  <div class="max-w-8xl">
    <header class="fixed top-8 right-7 left-[25rem] xl:left-[27rem] z-20">
      <Navbar />
    </header>

    <aside class="fixed top-7 left-7">
      <LeftPanel />
    </aside>

    <main class="pl-[25rem] xl:pl-[27rem]">
      <NuxtPage />
    </main>
  </div>
</template>
