<template>
  <div class="w-full h-full overflow-y-auto px-20 py-16">
    <div class="flex">
      <section class="w-[30%] border dark:border-zinc-700 p-4">
        <img src="/images/face.webp" alt="" class="rounded border-2 dark:border-zinc-600">
      </section>
      <section class="w-[40%] border dark:border-zinc-700 p-4">
        <h2 class="text-3xl underline mb-6 text-zinc-800 dark:text-zinc-100">About</h2>
        <p class="text-zinc-800 dark:text-zinc-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure sint, veritatis blanditiis earum velit, at delectus quibusdam fugit eius voluptatum? Nulla hic pariatur, perferendis laboriosam accusantium minima quas quisquam.</p>

        <div class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
          <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">Send Request</button>
        </div>

      </section>
      <section class="w-[30%] border dark:border-zinc-700 p-4 text-zinc-800 dark:text-zinc-100">
        <h2 class="text-3xl underline mb-6">Social Links</h2>
        <ul>
          <li>Facebook</li>
          <li>Google</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'dark',
    layout: 'docs'
  })
</script>

<style>

</style>