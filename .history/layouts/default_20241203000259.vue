<template>
  <div class="grid grid-cols-[auto_1fr] max-w-8xl">
    <aside class="w-[30rem] fixed top-7 left-7 h-[calc(100vh-4rem)]">
      <LeftPanel />
    </aside>

    <div>
      <header class="fixed top-8 right-7 left-[30rem] z-10">
        <Navbar />
      </header>

      <main class="pl-[30rem] pt-20">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
