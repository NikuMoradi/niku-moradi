<template>
  <div class="max-w-8xl">
    <header class="fixed top-8 right-7 left-[25rem] md:left-[30rem] z-10">
      <Navbar />
    </header>

    <aside class="fixed top-7 left-7">
      <LeftPanel />
    </aside>

    <main class="pl-[25rem] md:pl-[30rem]">
      <NuxtPage />
    </main>
  </div>
</template>
