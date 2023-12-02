<template>
  <div class="text-zinc-900 h-screen flex flex-col items-center justify-center font-indie relative">
      <div class="global-cover bg-cover bg-center" style="background-image:url('/images/auth.png')"></div>

      <section class="w-full md:max-w-sm bg-white/75 backdrop-blur rounded-xl">
        <h2 class="text-3xl font-bold mb-5 text-center border-b py-3 border-zinc-400">
            Join Boltwind
        </h2>
        <div class="text-center text-sm ">
            Share you details on
        </div>
        <div class="font-bold mt-5 text-center border-t py-3 border-zinc-400">me[at]vimalbharti.com</div>
      </section>

      <NuxtLink to="/" class="text-xs mt-5 flex items-center gap-2 justify-center text-white">
          <UIcon name="i-heroicons-arrow-left" />
          home
      </NuxtLink>
      
  </div>
</template>

<script setup>
  definePageMeta({
      colorMode: 'dark',
      layout: 'auth'
  })

</script>

<style>

</style>