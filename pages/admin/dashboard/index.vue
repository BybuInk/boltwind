<template>
    <div class="h-full flex flex-col gap-6">
      <div class="flex w-full gap-6 h-full">
        <section class="w-[70%] h-full overflow-y-auto">
          <h2 class="font-bold text-2xl mb-6 border-l-8 pl-3 mt-5 border-zinc-800 font-cairo">Welcome to Boltwind</h2>
          <!-- welcome box -->
          <section class="bg-gray-100 rounded-3xl p-6 flex justify-between items-center relative">
            <div class="space-y-3 w-[60%] p-6">
              <h2 class="text-2xl font-semibold font-cairo">Hi, Vimal Bharti</h2>
              <p class="text-sm text-zinc-600">Welcome back Vimal Bharti. We are glad you are here. Inspire the best work in people, enabling them to achieve their goals.</p>
              <NuxtLink to="/admin/profile">
                <button class="bg-zinc-900 text-white rounded-xl px-5 py-2 mt-5">View Details</button>
              </NuxtLink>
            </div>
            <figure class="w-[40%] absolute -bottom-10 right-0">
              <img src="/images/user.svg" alt="boltwind-user-svg-by-popsy.co" class="">
            </figure>
          </section>  

          <!-- All Components -->
          <section class="w-full mt-12">
            <div class="header flex items-center justify-between mb-4">
              <h3>My Components</h3>
              <button class="text-sm text-zinc-600">View All</button>
            </div>
            <div class="grid grid-cols-3 gap-6 w-full">
              <div class="bg-zinc-100 rounded-xl">
                <figure class="rounded-lg h-44 w-full object-cover overflow-hidden cursor-pointer">
                  <img src="/images/login.png" alt="" class="rounded-lg h-44 w-full object-cover hover:scale-125 transition duration-700 ease-in-out">
                </figure>
                <div class="flex items-center justify-between px-3 py-2">
                  <h2 class="text-sm">Navbar</h2>
                  <div class="flex-center gap-1">
                    <nuxt-icon name="clap" />
                    <span class="text-xs">22</span> 
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </section>

        <AuthRightSidebar />
      </div>
    </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'dashboard'
  })

</script>

<style>

</style>

