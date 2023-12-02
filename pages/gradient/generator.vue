<template>
  <div class="w-full h-full">
    <div class="flex gap-12 h-[calc(100vh)] overflow-hidden">
      <div 
        class="w-full h-full relative group bg-white flex flex-col items-center justify-center"
        :class="`${direction} ${fromColor} ${viaColor} ${toColor}`"
      >
        <div class="opacity-10 hover:opacity-100 transition duration-700 ease-in-out cursor-pointer">
          <div class="w-full text-center mb-10">
            <span class="text-4xl mb-8 font-caveat border-b-2 border-dotted">Tailwind Gradient Generator</span>
          </div>
          <section class="w-full max-w-md mx-auto">
            <h2 class="font-bold text-white">Direction</h2>
            <div class="grid grid-cols-8 gap-2">
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-r'">
                <UIcon name="i-heroicons-arrow-left" class="" />
              </button>
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-l'">
                <UIcon name="i-heroicons-arrow-right" class="" />
              </button>
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-t'">
                <UIcon name="i-heroicons-arrow-up" class="" />
              </button>
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-b'">
                <UIcon name="i-heroicons-arrow-down" class="" />
              </button>
              <!-- tr -->
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-tr'">
                <UIcon name="i-heroicons-arrow-up-right" class="" />
              </button>
              <!-- tl -->
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-tl'">
                <UIcon name="i-heroicons-arrow-up-left" class="" />
              </button>
              <!-- br -->
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-br'">
                <UIcon name="i-heroicons-arrow-down-right" class="" />
              </button>
              <!-- bl -->
              <button class="h-12 w-12 bg-zinc-800/75 backdrop-blur-xl rounded-xl flex-center" @click="direction = 'bg-gradient-to-bl'">
                <UIcon name="i-heroicons-arrow-down-left" class="" />
              </button>
            </div>
          </section>

          <!-- Color Buttons -->
          <div class="flex items-center justify-center gap-5 mt-12">
            <button class="shadow-xl font-bold font-edu text-xl rounded-full py-2 border px-7" :class="`bg-gradient-to-r ${fromColor}`" @click="fromColorPalette = true">from Color</button>
            <button class="shadow-xl font-bold font-edu text-xl rounded-full py-2 border px-7" :class="`bg-gradient-to-r from-transparent ${viaColor} to-transparent`" @click="viaColorPalette = true">Via Color</button>
            <button class="shadow-xl font-bold font-edu text-xl rounded-full py-2 border px-7" :class="`bg-gradient-to-r from-transparent ${toColor}`" @click="toColorPalette = true">to Color</button>
          </div>

          <!-- Tailwind Class -->
          <section class="mt-12 w-full max-w-md mx-auto">
            <h2 class="font-bold text-white">Tailwind Class</h2>
            <div class="text-white bg-black/50 backdrop-blur-lg border-l-4 border-white rounded-xl px-10 py-6">
              {{direction}} {{fromColor}} {{viaColor}} {{toColor}}
            </div>
          </section>
        </div>
      </div>

      <!-- Color Palettes -->
      <USlideover v-model="fromColorPalette">
        <div class="p-2 bg-zinc-900 h-screen overflow-y-auto">
          <Palettes @from-class="fromColor = $event" class="h-full"  />
        </div>
      </USlideover>
      <USlideover v-model="viaColorPalette">
        <div class="p-2 bg-zinc-900 h-screen overflow-y-auto">
          <Palettes @via-class="viaColor = $event" class="h-full"  />
        </div>
      </USlideover>
      <USlideover v-model="toColorPalette">
        <div class="p-2 bg-zinc-900 h-screen overflow-y-auto">
          <Palettes @to-class="toColor = $event" class="h-full"  />
        </div>
      </USlideover>
    </div>
  </div>
</template>


<script setup>
  definePageMeta({
    colorMode: 'dark',
  })
  const fromColorPalette = ref(false)
  const viaColorPalette = ref(false)
  const toColorPalette = ref(false)

  const items = [{
    slot: 'account',
    label: 'Account'
  }, {
    slot: 'password',
    label: 'Password'
  }]

  const ifCopied = ref(false);
  const preview = ref(false)

  const direction = ref('bg-gradient-to-r')
  const fromColor = ref('from-indigo-500')
  const viaColor = ref('')
  const toColor = ref('to-pink-300')

  const copyBtnHandle = () => {
    ifCopied.value = true
    setTimeout(() => {
      ifCopied.value = false
    }, 2000)
  }
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-enter,
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
  /* opacity: 0; */
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>