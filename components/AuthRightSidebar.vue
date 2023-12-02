<template>
  <div class="h-full w-[30%] bg-gray-100 overflow-y-auto p-6 rounded-3xl flex flex-col gap-6">
    <section class="w-full p-4 rounded-xl bg-white shadow flex items-center justify-start gap-3">
      <button class="bg-yellow-200 h-full w-14 rounded-lg flex-center">
        <nuxt-icon name="component" class="text-zinc-900 text-2xl" />
      </button>
      <div class="flex flex-col">
        <span class="text-[12px]">Component Posted</span>
        <span class="text-3xl font-bold">80</span>
      </div>
    </section>
    <!-- Total Likes -->
    <section class="w-full p-4 rounded-xl bg-white shadow flex items-center justify-start gap-3">
      <button class="bg-indigo-200 h-full w-14 rounded-lg flex-center">
        <nuxt-icon name="heart" class="text-zinc-900 text-2xl" />
      </button>
      <div class="flex flex-col">
        <span class="text-[12px]">Total Likes</span>
        <span class="text-3xl font-bold">80</span>
      </div>
    </section>
    <!-- New folowers this month -->
    <section class="w-full p-4 rounded-xl bg-white shadow flex items-center justify-start gap-3">
      <button class="bg-gray-200 h-full w-14 rounded-lg flex-center">
        <nuxt-icon name="users" class="text-zinc-900 text-2xl" />
      </button>
      <div class="flex flex-col">
        <span class="text-[12px]">Total Subscribers</span>
        <!-- <span class="text-[12px]">New Subscriber This Month</span> -->
        <span class="text-3xl font-bold">80</span>
      </div>
    </section>

    <!-- Followers -->
    <section class="w-full">
      <div class="header flex items-center justify-between mb-4">
        <h3>Followers</h3>
        <button class="text-xs text-zinc-600">View All</button>
      </div>
      <div class="flex items-center gap-3 overflow-x-auto w-full justify-between border-b p-2 rounded bg-zinc-50" v-for="n in 6">
        <div class="text-sm">testing@gmail.com</div>
        <div class="text-xs">23 Oct 2023</div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style>

</style>

