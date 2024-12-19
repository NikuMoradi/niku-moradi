<template>
  <div class="w-full">
    <header
      class="fixed z-20 h-14 bottom-7 left-1/2 -translate-x-1/2 780:w-full 780:top-5 780:pl-[20rem] 1000:pl-[29rem] 780:pr-6"
    >
      <Navbar />
    </header>
    <aside class="fixed z-20 hidden 780:block top-5">
      <LeftPanel />
    </aside>
    <main class="p-6 780:pl-[20rem] 1000:pl-[29rem]">
      <NuxtPage />
    </main>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  min-width: 320px;
  min-height: 100%;
}
</style>
