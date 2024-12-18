<template>
  <!-- <div class="max-w-8xl">
    <header
      class="fixed z-20 1000:top-3 1000:right-7 1000:left-[25rem] xl:left-[28rem] 780:bottom-7 780:left-1/2 780:transform 780:-translate-x-1/2"
    >
      <Navbar />
    </header>

    <aside class="fixed top-2 left-7 hidden 1000:block">
      <LeftPanel />
    </aside>

    <main
      class="1000:pl-[25rem] xl:pl-[28rem] 780:w-full 780:flex 780:flex-col 780:items-center 780:px-10"
    >
      <NuxtPage />
    </main>
  </div> -->

  <div class="max-8xl px-12 780:px-3 min-w-[370px]">
    <header
      class="fixed z-20 h-14 bottom-7 left-1/2 -translate-x-1/2 780:w-full 780:top-5 780:pl-[20rem] 1000:pl-[29rem] 780:pr-6"
    >
      <Navbar />
    </header>
    <aside class="fixed z-20 hidden 780:block top-5">
      <LeftPanel />
    </aside>
    <main class="780:pl-[20rem] 1000:pl-[29rem]">
      <NuxtPage />
    </main>
  </div>
</template>
