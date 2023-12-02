<template>
  <div class="flex gap-6 h-full">
    <section class="w-full flex h-full gap-6">

      <div class="border rounded-xl h-full overflow-y-auto relative">
        <h2 class="mb-4 border-b p-4 sticky top-0 bg-zinc-100">Unread Messages</h2>
        <div class="grid grid-cols-1 px-4" v-for="n in 7">
          <div class="bg-zinc-100 border rounded-xl p-4 mb-4">
            <h3>John Doe</h3>
            <h3 class="text-sm mb-3 text-zinc-500">john@gmail.com</h3>
            <p class="text-sm text-zinc-800 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, quibusdam distinctio vero deserunt dolorem ducimus placeat.</p>
            <div class="flex-between mt-3">
              <span class="text-zinc-800 text-xs font-bold">14 Oct 2023</span>
              <button class="text-xs border rounded-xl px-3 py-1 bg-white flex-center group">
                <nuxt-icon name="tick" class="text-xl group-hover:text-green-600" />
                Mark read
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Read message -->
      <div class="border rounded-xl overflow-y-auto relative">
        <h2 class="mb-4 border-b p-4 sticky top-0 bg-zinc-100">Messages</h2>
        <div class="grid grid-cols-1 px-4" v-for="n in 7">
          <div class="bg-white shadow-inner border rounded-xl p-4 mb-4">
            <h3>John Doe</h3>
            <h3 class="text-sm mb-3 text-zinc-500">john@gmail.com</h3>
            <p class="text-sm text-zinc-800 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, quibusdam distinctio vero deserunt dolorem ducimus placeat.</p>
            <div class="flex-between mt-3">
              <span class="text-zinc-800 text-xs font-bold">14 Oct 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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

