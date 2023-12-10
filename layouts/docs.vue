<template>
  <section class="h-screen overflow-hidden bg-white dark:bg-zinc-900 dotted-bg">
      <MainNavbar class="bg-white dark:bg-zinc-900" />
      
      <div class="flex h-[calc(100vh-52px)]">
          <DocSidebar />

          <!-- <div class="bg-zinc-950 p-12 w-full h-[calc(100vh-55px)] overflow-y-auto rounded-tl-3xl"> -->
          <div class="w-full lg:w-[80%] text-zinc-100 flex flex-col h-full overflow-y-auto gap-6 bg-zinc-50 dark:bg-zinc-900">
              <slot />
          </div>
      </div>
  </section>
</template>

<style>
.dotted-bg{
  background: radial-gradient(#27272a 10.75%, transparent 0px) 1px 1px / 5px 5px #18181b;
}
</style>