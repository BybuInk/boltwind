<template>
  <div class="relative">
    <header class="bg-white w-full flex justify-between items-center py-6 border-2 border-dotted rounded-2xl px-6">
        <div>
          <h2 class="font-bold text-xl">Profile Setting</h2>
          <p class="text-sm text-zinc-600 mt-1">Update you profile details and photo here.</p>
        </div>
        <button 
            class="hover:bg-gray-800 hover:text-white border py-2 px-4 rounded-lg text-sm"
            type="submit" @click="updateProfile">
            {{ loading ? 'Updating...' : 'Update Profile' }}
        </button>
    </header>
    
    <div class="h-[calc(100vh-150px)] overflow-y-auto">
      <section class="py-12 w-full border-b-2 border-dotted">
        <div class="max-w-3xl mx-auto flex items-start gap-12">
          <div class="w-[40%]">
            <h2 class="font-bold">Public profile</h2>
            <p class="text-sm text-zinc-600 mt-1">This will be displayed on your profile.</p>
          </div>
          <div class="w-[60%] space-y-5">
            <input type="text" placeholder="Enter username" v-model="username" class="focus:outline-none border p-3 rounded-lg w-full">
            <div class="border border-dashed rounded-lg w-full flex items-center">
              <span class="border-r border-dashed p-3 text-gray-400">boltwind.ink/u/</span>
              <input type="text" placeholder="username" class="w-full p-3 rounded-xl focus:outline-none" v-model="username" readonly>
            </div>
          </div>
        </div>
      </section>

      <!-- Bio/about yourself -->
      <section class="py-12 w-full border-b-2 border-dotted">
        <div class="max-w-3xl mx-auto flex items-start gap-12">
          <div class="w-[40%]">
            <h2 class="font-bold">Describe yourself</h2>
            <p class="text-sm text-zinc-600 mt-1">A quick description about you.</p>
          </div>
          <div class="w-[60%] space-y-5">
            <textarea rows="6" placeholder="Enter username" v-model="username" class="focus:outline-none border p-3 rounded-lg w-full"></textarea>
          </div>
        </div>
      </section>

      <!-- Profile Photo -->
      <section class="py-12 w-full border-b-2 border-dotted">
        <div class="max-w-3xl mx-auto flex items-start gap-12">
          <div class="w-[40%]">
            <h2 class="font-bold">Profile Photo</h2>
            <p class="text-sm text-zinc-600 mt-1">Update your profile photo.</p>
          </div>
          <div class="w-[60%] space-y-5 flex-center gap-6">
            <figure class="">
              <img src="" alt="">
            </figure>
            <input type="file" >
          </div>
        </div>
      </section>

      <!-- Social Links -->
      <section class="py-12 w-full">
        <div class="max-w-3xl mx-auto flex items-start gap-12">
          <div class="w-[40%]">
            <h2 class="font-bold">Social profiles</h2>
            <p class="text-sm text-zinc-600 mt-1">Update your profile photo.</p>
          </div>
          <div class="w-[60%] space-y-5 flex-center gap-6">
            <div class="border rounded-lg w-full flex items-center">
              <span class="border-r p-3 text-gray-400">boltwind.ink/u/</span>
              <input type="text" placeholder="username" class="w-full p-3 rounded-xl focus:outline-none" v-model="username" readonly>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'dashboard'
  })    

  const username = ref('')
</script>

<style>

</style>

