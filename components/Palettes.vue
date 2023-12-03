<template>
  <div class="grid grid-cols-11 gap-1 mb-1">
      <div class="w-full relative rounded bg-white border border-zinc-700">
          <button 
              class="w-full h-full rounded text-zinc-400"
              @click="emit('fromClass', ''); emit('toClass', ''); emit('viaClass', '');"
          >
          </button>
      </div>
      <div class="w-full h-10 relative rounded bg-white border border-zinc-700">
          <button 
              class="w-full h-full rounded"
              @click="emit('fromClass', 'from-white'); emit('toClass', 'to-white'); emit('viaClass', 'via-white');"
          ></button>
      </div>
      <div class="w-full h-10 relative rounded bg-black border border-zinc-700">
          <button 
              class="w-full h-full rounded"
              @click="emit('fromClass', 'from-black'); emit('toClass', 'to-black'); emit('viaClass', 'via-black');"
          ></button>
      </div>
  </div>
  <div class="grid grid-cols-11 gap-1 rounded">
      <div v-for="color in colors"
          :key="color"
          class="w-full h-10 relative rounded border border-zinc-700"
          :class="color.bg"
      >
          <button 
              class="w-full h-full rounded"
              @click="emit('fromClass', color.from); emit('toClass', color.to); emit('viaClass', color.via);"
          ></button>
      </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['fromClass', 'viaClass', 'toClass']);

  const colors = ref([
      { parent: 'slate', bg:'bg-slate-50', from: 'from-slate-50', via: 'via-slate-50', to: 'to-slate-50' },
      { parent: 'slate', bg:'bg-slate-100', from: 'from-slate-100', via: 'via-slate-100', to: 'to-slate-100' },
      { parent: 'slate', bg:'bg-slate-200', from: 'from-slate-200', via: 'via-slate-200', to: 'to-slate-200' },
      { parent: 'slate', bg:'bg-slate-300', from: 'from-slate-300', via: 'via-slate-300', to: 'to-slate-300' },
      { parent: 'slate', bg:'bg-slate-400', from: 'from-slate-400', via: 'via-slate-400', to: 'to-slate-400' },
      { parent: 'slate', bg:'bg-slate-500', from: 'from-slate-500', via: 'via-slate-500', to: 'to-slate-500' },
      { parent: 'slate', bg:'bg-slate-600', from: 'from-slate-600', via: 'via-slate-600', to: 'to-slate-600' },
      { parent: 'slate', bg:'bg-slate-700', from: 'from-slate-700', via: 'via-slate-700', to: 'to-slate-700' },
      { parent: 'slate', bg:'bg-slate-800', from: 'from-slate-800', via: 'via-slate-800', to: 'to-slate-800' },
      { parent: 'slate', bg:'bg-slate-900', from: 'from-slate-900', via: 'via-slate-900', to: 'to-slate-900' },
      { parent: 'slate', bg:'bg-slate-950', from: 'from-slate-950', via: 'via-slate-950', to: 'to-slate-950' },

      { parent: 'gray', bg:'bg-gray-50', from: 'from-gray-50', via: 'via-gray-50', to: 'to-gray-50' },
      { parent: 'gray', bg:'bg-gray-100', from: 'from-gray-100', via: 'via-gray-100', to: 'to-gray-100' },
      { parent: 'gray', bg:'bg-gray-200', from: 'from-gray-200', via: 'via-gray-200', to: 'to-gray-200' },
      { parent: 'gray', bg:'bg-gray-300', from: 'from-gray-300', via: 'via-gray-300', to: 'to-gray-300' },
      { parent: 'gray', bg:'bg-gray-400', from: 'from-gray-400', via: 'via-gray-400', to: 'to-gray-400' },
      { parent: 'gray', bg:'bg-gray-500', from: 'from-gray-500', via: 'via-gray-500', to: 'to-gray-500' },
      { parent: 'gray', bg:'bg-gray-600', from: 'from-gray-600', via: 'via-gray-600', to: 'to-gray-600' },
      { parent: 'gray', bg:'bg-gray-700', from: 'from-gray-700', via: 'via-gray-700', to: 'to-gray-700' },
      { parent: 'gray', bg:'bg-gray-800', from: 'from-gray-800', via: 'via-gray-800', to: 'to-gray-800' },
      { parent: 'gray', bg:'bg-gray-900', from: 'from-gray-900', via: 'via-gray-900', to: 'to-gray-900' },
      { parent: 'gray', bg:'bg-gray-950', from: 'from-gray-950', via: 'via-gray-950', to: 'to-gray-950' },

      { parent: 'zinc', bg:'bg-zinc-50', from: 'from-zinc-50', via: 'via-zinc-50', to: 'to-zinc-50' },
      { parent: 'zinc', bg:'bg-zinc-100', from: 'from-zinc-100', via: 'via-zinc-100', to: 'to-zinc-100' },
      { parent: 'zinc', bg:'bg-zinc-200', from: 'from-zinc-200', via: 'via-zinc-200', to: 'to-zinc-200' },
      { parent: 'zinc', bg:'bg-zinc-300', from: 'from-zinc-300', via: 'via-zinc-300', to: 'to-zinc-300' },
      { parent: 'zinc', bg:'bg-zinc-400', from: 'from-zinc-400', via: 'via-zinc-400', to: 'to-zinc-400' },
      { parent: 'zinc', bg:'bg-zinc-500', from: 'from-zinc-500', via: 'via-zinc-500', to: 'to-zinc-500' },
      { parent: 'zinc', bg:'bg-zinc-600', from: 'from-zinc-600', via: 'via-zinc-600', to: 'to-zinc-600' },
      { parent: 'zinc', bg:'bg-zinc-700', from: 'from-zinc-700', via: 'via-zinc-700', to: 'to-zinc-700' },
      { parent: 'zinc', bg:'bg-zinc-800', from: 'from-zinc-800', via: 'via-zinc-800', to: 'to-zinc-800' },
      { parent: 'zinc', bg:'bg-zinc-900', from: 'from-zinc-900', via: 'via-zinc-900', to: 'to-zinc-900' },
      { parent: 'zinc', bg:'bg-zinc-950', from: 'from-zinc-950', via: 'via-zinc-950', to: 'to-zinc-950' },

      { parent: 'neutral', bg:'bg-neutral-50', from: 'from-neutral-50', via: 'via-neutral-50', to: 'to-neutral-50' },
      { parent: 'neutral', bg:'bg-neutral-100', from: 'from-neutral-100', via: 'via-neutral-100', to: 'to-neutral-100' },
      { parent: 'neutral', bg:'bg-neutral-200', from: 'from-neutral-200', via: 'via-neutral-200', to: 'to-neutral-200' },
      { parent: 'neutral', bg:'bg-neutral-300', from: 'from-neutral-300', via: 'via-neutral-300', to: 'to-neutral-300' },
      { parent: 'neutral', bg:'bg-neutral-400', from: 'from-neutral-400', via: 'via-neutral-400', to: 'to-neutral-400' },
      { parent: 'neutral', bg:'bg-neutral-500', from: 'from-neutral-500', via: 'via-neutral-500', to: 'to-neutral-500' },
      { parent: 'neutral', bg:'bg-neutral-600', from: 'from-neutral-600', via: 'via-neutral-600', to: 'to-neutral-600' },
      { parent: 'neutral', bg:'bg-neutral-700', from: 'from-neutral-700', via: 'via-neutral-700', to: 'to-neutral-700' },
      { parent: 'neutral', bg:'bg-neutral-800', from: 'from-neutral-800', via: 'via-neutral-800', to: 'to-neutral-800' },
      { parent: 'neutral', bg:'bg-neutral-900', from: 'from-neutral-900', via: 'via-neutral-900', to: 'to-neutral-900' },
      { parent: 'neutral', bg:'bg-neutral-950', from: 'from-neutral-950', via: 'via-neutral-950', to: 'to-neutral-950' },

      { parent: 'stone', bg:'bg-stone-50', from: 'from-stone-50', via: 'via-stone-50', to: 'to-stone-50' },
      { parent: 'stone', bg:'bg-stone-100', from: 'from-stone-100', via: 'via-stone-100', to: 'to-stone-100' },
      { parent: 'stone', bg:'bg-stone-200', from: 'from-stone-200', via: 'via-stone-200', to: 'to-stone-200' },
      { parent: 'stone', bg:'bg-stone-300', from: 'from-stone-300', via: 'via-stone-300', to: 'to-stone-300' },
      { parent: 'stone', bg:'bg-stone-400', from: 'from-stone-400', via: 'via-stone-400', to: 'to-stone-400' },
      { parent: 'stone', bg:'bg-stone-500', from: 'from-stone-500', via: 'via-stone-500', to: 'to-stone-500' },
      { parent: 'stone', bg:'bg-stone-600', from: 'from-stone-600', via: 'via-stone-600', to: 'to-stone-600' },
      { parent: 'stone', bg:'bg-stone-700', from: 'from-stone-700', via: 'via-stone-700', to: 'to-stone-700' },
      { parent: 'stone', bg:'bg-stone-800', from: 'from-stone-800', via: 'via-stone-800', to: 'to-stone-800' },
      { parent: 'stone', bg:'bg-stone-900', from: 'from-stone-900', via: 'via-stone-900', to: 'to-stone-900' },
      { parent: 'stone', bg:'bg-stone-950', from: 'from-stone-950', via: 'via-stone-950', to: 'to-stone-950' },

      { parent: 'red', bg:'bg-red-50', from: 'from-red-50', via: 'via-red-50', to: 'to-red-50' },
      { parent: 'red', bg:'bg-red-100', from: 'from-red-100', via: 'via-red-100', to: 'to-red-100' },
      { parent: 'red', bg:'bg-red-200', from: 'from-red-200', via: 'via-red-200', to: 'to-red-200' },
      { parent: 'red', bg:'bg-red-300', from: 'from-red-300', via: 'via-red-300', to: 'to-red-300' },
      { parent: 'red', bg:'bg-red-400', from: 'from-red-400', via: 'via-red-400', to: 'to-red-400' },
      { parent: 'red', bg:'bg-red-500', from: 'from-red-500', via: 'via-red-500', to: 'to-red-500' },
      { parent: 'red', bg:'bg-red-600', from: 'from-red-600', via: 'via-red-600', to: 'to-red-600' },
      { parent: 'red', bg:'bg-red-700', from: 'from-red-700', via: 'via-red-700', to: 'to-red-700' },
      { parent: 'red', bg:'bg-red-800', from: 'from-red-800', via: 'via-red-800', to: 'to-red-800' },
      { parent: 'red', bg:'bg-red-900', from: 'from-red-900', via: 'via-red-900', to: 'to-red-900' },
      { parent: 'red', bg:'bg-red-950', from: 'from-red-950', via: 'via-red-950', to: 'to-red-950' },

      { parent: 'orange', bg:'bg-orange-50', from: 'from-orange-50', via: 'via-orange-50', to: 'to-orange-50' },
      { parent: 'orange', bg:'bg-orange-100', from: 'from-orange-100', via: 'via-orange-100', to: 'to-orange-100' },
      { parent: 'orange', bg:'bg-orange-200', from: 'from-orange-200', via: 'via-orange-200', to: 'to-orange-200' },
      { parent: 'orange', bg:'bg-orange-300', from: 'from-orange-300', via: 'via-orange-300', to: 'to-orange-300' },
      { parent: 'orange', bg:'bg-orange-400', from: 'from-orange-400', via: 'via-orange-400', to: 'to-orange-400' },
      { parent: 'orange', bg:'bg-orange-500', from: 'from-orange-500', via: 'via-orange-500', to: 'to-orange-500' },
      { parent: 'orange', bg:'bg-orange-600', from: 'from-orange-600', via: 'via-orange-600', to: 'to-orange-600' },
      { parent: 'orange', bg:'bg-orange-700', from: 'from-orange-700', via: 'via-orange-700', to: 'to-orange-700' },
      { parent: 'orange', bg:'bg-orange-800', from: 'from-orange-800', via: 'via-orange-800', to: 'to-orange-800' },
      { parent: 'orange', bg:'bg-orange-900', from: 'from-orange-900', via: 'via-orange-900', to: 'to-orange-900' },
      { parent: 'orange', bg:'bg-orange-950', from: 'from-orange-950', via: 'via-orange-950', to: 'to-orange-950' },

      { parent: 'amber', bg:'bg-amber-50', from: 'from-amber-50', via: 'via-amber-50', to: 'to-amber-50' },
      { parent: 'amber', bg:'bg-amber-100', from: 'from-amber-100', via: 'via-amber-100', to: 'to-amber-100' },
      { parent: 'amber', bg:'bg-amber-200', from: 'from-amber-200', via: 'via-amber-200', to: 'to-amber-200' },
      { parent: 'amber', bg:'bg-amber-300', from: 'from-amber-300', via: 'via-amber-300', to: 'to-amber-300' },
      { parent: 'amber', bg:'bg-amber-400', from: 'from-amber-400', via: 'via-amber-400', to: 'to-amber-400' },
      { parent: 'amber', bg:'bg-amber-500', from: 'from-amber-500', via: 'via-amber-500', to: 'to-amber-500' },
      { parent: 'amber', bg:'bg-amber-600', from: 'from-amber-600', via: 'via-amber-600', to: 'to-amber-600' },
      { parent: 'amber', bg:'bg-amber-700', from: 'from-amber-700', via: 'via-amber-700', to: 'to-amber-700' },
      { parent: 'amber', bg:'bg-amber-800', from: 'from-amber-800', via: 'via-amber-800', to: 'to-amber-800' },
      { parent: 'amber', bg:'bg-amber-900', from: 'from-amber-900', via: 'via-amber-900', to: 'to-amber-900' },
      { parent: 'amber', bg:'bg-amber-950', from: 'from-amber-950', via: 'via-amber-950', to: 'to-amber-950' },

      { parent: 'yellow', bg:'bg-yellow-50', from: 'from-yellow-50', via: 'via-yellow-50', to: 'to-yellow-50' },
      { parent: 'yellow', bg:'bg-yellow-100', from: 'from-yellow-100', via: 'via-yellow-100', to: 'to-yellow-100' },
      { parent: 'yellow', bg:'bg-yellow-200', from: 'from-yellow-200', via: 'via-yellow-200', to: 'to-yellow-200' },
      { parent: 'yellow', bg:'bg-yellow-300', from: 'from-yellow-300', via: 'via-yellow-300', to: 'to-yellow-300' },
      { parent: 'yellow', bg:'bg-yellow-400', from: 'from-yellow-400', via: 'via-yellow-400', to: 'to-yellow-400' },
      { parent: 'yellow', bg:'bg-yellow-500', from: 'from-yellow-500', via: 'via-yellow-500', to: 'to-yellow-500' },
      { parent: 'yellow', bg:'bg-yellow-600', from: 'from-yellow-600', via: 'via-yellow-600', to: 'to-yellow-600' },
      { parent: 'yellow', bg:'bg-yellow-700', from: 'from-yellow-700', via: 'via-yellow-700', to: 'to-yellow-700' },
      { parent: 'yellow', bg:'bg-yellow-800', from: 'from-yellow-800', via: 'via-yellow-800', to: 'to-yellow-800' },
      { parent: 'yellow', bg:'bg-yellow-900', from: 'from-yellow-900', via: 'via-yellow-900', to: 'to-yellow-900' },
      { parent: 'yellow', bg:'bg-yellow-950', from: 'from-yellow-950', via: 'via-yellow-950', to: 'to-yellow-950' },

      { parent: 'lime', bg:'bg-lime-50', from: 'from-lime-50', via: 'via-lime-50', to: 'to-lime-50' },
      { parent: 'lime', bg:'bg-lime-100', from: 'from-lime-100', via: 'via-lime-100', to: 'to-lime-100' },
      { parent: 'lime', bg:'bg-lime-200', from: 'from-lime-200', via: 'via-lime-200', to: 'to-lime-200' },
      { parent: 'lime', bg:'bg-lime-300', from: 'from-lime-300', via: 'via-lime-300', to: 'to-lime-300' },
      { parent: 'lime', bg:'bg-lime-400', from: 'from-lime-400', via: 'via-lime-400', to: 'to-lime-400' },
      { parent: 'lime', bg:'bg-lime-500', from: 'from-lime-500', via: 'via-lime-500', to: 'to-lime-500' },
      { parent: 'lime', bg:'bg-lime-600', from: 'from-lime-600', via: 'via-lime-600', to: 'to-lime-600' },
      { parent: 'lime', bg:'bg-lime-700', from: 'from-lime-700', via: 'via-lime-700', to: 'to-lime-700' },
      { parent: 'lime', bg:'bg-lime-800', from: 'from-lime-800', via: 'via-lime-800', to: 'to-lime-800' },
      { parent: 'lime', bg:'bg-lime-900', from: 'from-lime-900', via: 'via-lime-900', to: 'to-lime-900' },
      { parent: 'lime', bg:'bg-lime-950', from: 'from-lime-950', via: 'via-lime-950', to: 'to-lime-950' },

      { parent: 'green', bg:'bg-green-50', from: 'from-green-50', via: 'via-green-50', to: 'to-green-50' },
      { parent: 'green', bg:'bg-green-100', from: 'from-green-100', via: 'via-green-100', to: 'to-green-100' },
      { parent: 'green', bg:'bg-green-200', from: 'from-green-200', via: 'via-green-200', to: 'to-green-200' },
      { parent: 'green', bg:'bg-green-300', from: 'from-green-300', via: 'via-green-300', to: 'to-green-300' },
      { parent: 'green', bg:'bg-green-400', from: 'from-green-400', via: 'via-green-400', to: 'to-green-400' },
      { parent: 'green', bg:'bg-green-500', from: 'from-green-500', via: 'via-green-500', to: 'to-green-500' },
      { parent: 'green', bg:'bg-green-600', from: 'from-green-600', via: 'via-green-600', to: 'to-green-600' },
      { parent: 'green', bg:'bg-green-700', from: 'from-green-700', via: 'via-green-700', to: 'to-green-700' },
      { parent: 'green', bg:'bg-green-800', from: 'from-green-800', via: 'via-green-800', to: 'to-green-800' },
      { parent: 'green', bg:'bg-green-900', from: 'from-green-900', via: 'via-green-900', to: 'to-green-900' },
      { parent: 'green', bg:'bg-green-950', from: 'from-green-950', via: 'via-green-950', to: 'to-green-950' },

      { parent: 'emerald', bg:'bg-emerald-50', from: 'from-emerald-50', via: 'via-emerald-50', to: 'to-emerald-50' },
      { parent: 'emerald', bg:'bg-emerald-100', from: 'from-emerald-100', via: 'via-emerald-100', to: 'to-emerald-100' },
      { parent: 'emerald', bg:'bg-emerald-200', from: 'from-emerald-200', via: 'via-emerald-200', to: 'to-emerald-200' },
      { parent: 'emerald', bg:'bg-emerald-300', from: 'from-emerald-300', via: 'via-emerald-300', to: 'to-emerald-300' },
      { parent: 'emerald', bg:'bg-emerald-400', from: 'from-emerald-400', via: 'via-emerald-400', to: 'to-emerald-400' },
      { parent: 'emerald', bg:'bg-emerald-500', from: 'from-emerald-500', via: 'via-emerald-500', to: 'to-emerald-500' },
      { parent: 'emerald', bg:'bg-emerald-600', from: 'from-emerald-600', via: 'via-emerald-600', to: 'to-emerald-600' },
      { parent: 'emerald', bg:'bg-emerald-700', from: 'from-emerald-700', via: 'via-emerald-700', to: 'to-emerald-700' },
      { parent: 'emerald', bg:'bg-emerald-800', from: 'from-emerald-800', via: 'via-emerald-800', to: 'to-emerald-800' },
      { parent: 'emerald', bg:'bg-emerald-900', from: 'from-emerald-900', via: 'via-emerald-900', to: 'to-emerald-900' },
      { parent: 'emerald', bg:'bg-emerald-950', from: 'from-emerald-950', via: 'via-emerald-950', to: 'to-emerald-950' },

      { parent: 'teal', bg:'bg-teal-50', from: 'from-teal-50', via: 'via-teal-50', to: 'to-teal-50' },
      { parent: 'teal', bg:'bg-teal-100', from: 'from-teal-100', via: 'via-teal-100', to: 'to-teal-100' },
      { parent: 'teal', bg:'bg-teal-200', from: 'from-teal-200', via: 'via-teal-200', to: 'to-teal-200' },
      { parent: 'teal', bg:'bg-teal-300', from: 'from-teal-300', via: 'via-teal-300', to: 'to-teal-300' },
      { parent: 'teal', bg:'bg-teal-400', from: 'from-teal-400', via: 'via-teal-400', to: 'to-teal-400' },
      { parent: 'teal', bg:'bg-teal-500', from: 'from-teal-500', via: 'via-teal-500', to: 'to-teal-500' },
      { parent: 'teal', bg:'bg-teal-600', from: 'from-teal-600', via: 'via-teal-600', to: 'to-teal-600' },
      { parent: 'teal', bg:'bg-teal-700', from: 'from-teal-700', via: 'via-teal-700', to: 'to-teal-700' },
      { parent: 'teal', bg:'bg-teal-800', from: 'from-teal-800', via: 'via-teal-800', to: 'to-teal-800' },
      { parent: 'teal', bg:'bg-teal-900', from: 'from-teal-900', via: 'via-teal-900', to: 'to-teal-900' },
      { parent: 'teal', bg:'bg-teal-950', from: 'from-teal-950', via: 'via-teal-950', to: 'to-teal-950' },
      
      { parent: 'cyan', bg:'bg-cyan-50', from: 'from-cyan-50', via: 'via-cyan-50', to: 'to-cyan-50' },
      { parent: 'cyan', bg:'bg-cyan-100', from: 'from-cyan-100', via: 'via-cyan-100', to: 'to-cyan-100' },
      { parent: 'cyan', bg:'bg-cyan-200', from: 'from-cyan-200', via: 'via-cyan-200', to: 'to-cyan-200' },
      { parent: 'cyan', bg:'bg-cyan-300', from: 'from-cyan-300', via: 'via-cyan-300', to: 'to-cyan-300' },
      { parent: 'cyan', bg:'bg-cyan-400', from: 'from-cyan-400', via: 'via-cyan-400', to: 'to-cyan-400' },
      { parent: 'cyan', bg:'bg-cyan-500', from: 'from-cyan-500', via: 'via-cyan-500', to: 'to-cyan-500' },
      { parent: 'cyan', bg:'bg-cyan-600', from: 'from-cyan-600', via: 'via-cyan-600', to: 'to-cyan-600' },
      { parent: 'cyan', bg:'bg-cyan-700', from: 'from-cyan-700', via: 'via-cyan-700', to: 'to-cyan-700' },
      { parent: 'cyan', bg:'bg-cyan-800', from: 'from-cyan-800', via: 'via-cyan-800', to: 'to-cyan-800' },
      { parent: 'cyan', bg:'bg-cyan-900', from: 'from-cyan-900', via: 'via-cyan-900', to: 'to-cyan-900' },
      { parent: 'cyan', bg:'bg-cyan-950', from: 'from-cyan-950', via: 'via-cyan-950', to: 'to-cyan-950' },
      
      { parent: 'sky', bg:'bg-sky-50', from: 'from-sky-50', via: 'via-sky-50', to: 'to-sky-50' },
      { parent: 'sky', bg:'bg-sky-100', from: 'from-sky-100', via: 'via-sky-100', to: 'to-sky-100' },
      { parent: 'sky', bg:'bg-sky-200', from: 'from-sky-200', via: 'via-sky-200', to: 'to-sky-200' },
      { parent: 'sky', bg:'bg-sky-300', from: 'from-sky-300', via: 'via-sky-300', to: 'to-sky-300' },
      { parent: 'sky', bg:'bg-sky-400', from: 'from-sky-400', via: 'via-sky-400', to: 'to-sky-400' },
      { parent: 'sky', bg:'bg-sky-500', from: 'from-sky-500', via: 'via-sky-500', to: 'to-sky-500' },
      { parent: 'sky', bg:'bg-sky-600', from: 'from-sky-600', via: 'via-sky-600', to: 'to-sky-600' },
      { parent: 'sky', bg:'bg-sky-700', from: 'from-sky-700', via: 'via-sky-700', to: 'to-sky-700' },
      { parent: 'sky', bg:'bg-sky-800', from: 'from-sky-800', via: 'via-sky-800', to: 'to-sky-800' },
      { parent: 'sky', bg:'bg-sky-900', from: 'from-sky-900', via: 'via-sky-900', to: 'to-sky-900' },
      { parent: 'sky', bg:'bg-sky-950', from: 'from-sky-950', via: 'via-sky-950', to: 'to-sky-950' },
      
      { parent: 'blue', bg:'bg-blue-50', from: 'from-blue-50', via: 'via-blue-50', to: 'to-blue-50' },
      { parent: 'blue', bg:'bg-blue-100', from: 'from-blue-100', via: 'via-blue-100', to: 'to-blue-100' },
      { parent: 'blue', bg:'bg-blue-200', from: 'from-blue-200', via: 'via-blue-200', to: 'to-blue-200' },
      { parent: 'blue', bg:'bg-blue-300', from: 'from-blue-300', via: 'via-blue-300', to: 'to-blue-300' },
      { parent: 'blue', bg:'bg-blue-400', from: 'from-blue-400', via: 'via-blue-400', to: 'to-blue-400' },
      { parent: 'blue', bg:'bg-blue-500', from: 'from-blue-500', via: 'via-blue-500', to: 'to-blue-500' },
      { parent: 'blue', bg:'bg-blue-600', from: 'from-blue-600', via: 'via-blue-600', to: 'to-blue-600' },
      { parent: 'blue', bg:'bg-blue-700', from: 'from-blue-700', via: 'via-blue-700', to: 'to-blue-700' },
      { parent: 'blue', bg:'bg-blue-800', from: 'from-blue-800', via: 'via-blue-800', to: 'to-blue-800' },
      { parent: 'blue', bg:'bg-blue-900', from: 'from-blue-900', via: 'via-blue-900', to: 'to-blue-900' },
      { parent: 'blue', bg:'bg-blue-950', from: 'from-blue-950', via: 'via-blue-950', to: 'to-blue-950' },
      
      { parent: 'indigo', bg:'bg-indigo-50', from: 'from-indigo-50', via: 'via-indigo-50', to: 'to-indigo-50' },
      { parent: 'indigo', bg:'bg-indigo-100', from: 'from-indigo-100', via: 'via-indigo-100', to: 'to-indigo-100' },
      { parent: 'indigo', bg:'bg-indigo-200', from: 'from-indigo-200', via: 'via-indigo-200', to: 'to-indigo-200' },
      { parent: 'indigo', bg:'bg-indigo-300', from: 'from-indigo-300', via: 'via-indigo-300', to: 'to-indigo-300' },
      { parent: 'indigo', bg:'bg-indigo-400', from: 'from-indigo-400', via: 'via-indigo-400', to: 'to-indigo-400' },
      { parent: 'indigo', bg:'bg-indigo-500', from: 'from-indigo-500', via: 'via-indigo-500', to: 'to-indigo-500' },
      { parent: 'indigo', bg:'bg-indigo-600', from: 'from-indigo-600', via: 'via-indigo-600', to: 'to-indigo-600' },
      { parent: 'indigo', bg:'bg-indigo-700', from: 'from-indigo-700', via: 'via-indigo-700', to: 'to-indigo-700' },
      { parent: 'indigo', bg:'bg-indigo-800', from: 'from-indigo-800', via: 'via-indigo-800', to: 'to-indigo-800' },
      { parent: 'indigo', bg:'bg-indigo-900', from: 'from-indigo-900', via: 'via-indigo-900', to: 'to-indigo-900' },
      { parent: 'indigo', bg:'bg-indigo-950', from: 'from-indigo-950', via: 'via-indigo-950', to: 'to-indigo-950' },
      
      { parent: 'violet', bg:'bg-violet-50', from: 'from-violet-50', via: 'via-violet-50', to: 'to-violet-50' },
      { parent: 'violet', bg:'bg-violet-100', from: 'from-violet-100', via: 'via-violet-100', to: 'to-violet-100' },
      { parent: 'violet', bg:'bg-violet-200', from: 'from-violet-200', via: 'via-violet-200', to: 'to-violet-200' },
      { parent: 'violet', bg:'bg-violet-300', from: 'from-violet-300', via: 'via-violet-300', to: 'to-violet-300' },
      { parent: 'violet', bg:'bg-violet-400', from: 'from-violet-400', via: 'via-violet-400', to: 'to-violet-400' },
      { parent: 'violet', bg:'bg-violet-500', from: 'from-violet-500', via: 'via-violet-500', to: 'to-violet-500' },
      { parent: 'violet', bg:'bg-violet-600', from: 'from-violet-600', via: 'via-violet-600', to: 'to-violet-600' },
      { parent: 'violet', bg:'bg-violet-700', from: 'from-violet-700', via: 'via-violet-700', to: 'to-violet-700' },
      { parent: 'violet', bg:'bg-violet-800', from: 'from-violet-800', via: 'via-violet-800', to: 'to-violet-800' },
      { parent: 'violet', bg:'bg-violet-900', from: 'from-violet-900', via: 'via-violet-900', to: 'to-violet-900' },
      { parent: 'violet', bg:'bg-violet-950', from: 'from-violet-950', via: 'via-violet-950', to: 'to-violet-950' },
      
      { parent: 'purple', bg:'bg-purple-50', from: 'from-purple-50', via: 'via-purple-50', to: 'to-purple-50' },
      { parent: 'purple', bg:'bg-purple-100', from: 'from-purple-100', via: 'via-purple-100', to: 'to-purple-100' },
      { parent: 'purple', bg:'bg-purple-200', from: 'from-purple-200', via: 'via-purple-200', to: 'to-purple-200' },
      { parent: 'purple', bg:'bg-purple-300', from: 'from-purple-300', via: 'via-purple-300', to: 'to-purple-300' },
      { parent: 'purple', bg:'bg-purple-400', from: 'from-purple-400', via: 'via-purple-400', to: 'to-purple-400' },
      { parent: 'purple', bg:'bg-purple-500', from: 'from-purple-500', via: 'via-purple-500', to: 'to-purple-500' },
      { parent: 'purple', bg:'bg-purple-600', from: 'from-purple-600', via: 'via-purple-600', to: 'to-purple-600' },
      { parent: 'purple', bg:'bg-purple-700', from: 'from-purple-700', via: 'via-purple-700', to: 'to-purple-700' },
      { parent: 'purple', bg:'bg-purple-800', from: 'from-purple-800', via: 'via-purple-800', to: 'to-purple-800' },
      { parent: 'purple', bg:'bg-purple-900', from: 'from-purple-900', via: 'via-purple-900', to: 'to-purple-900' },
      { parent: 'purple', bg:'bg-purple-950', from: 'from-purple-950', via: 'via-purple-950', to: 'to-purple-950' },
      
      { parent: 'fuchsia', bg:'bg-fuchsia-50', from: 'from-fuchsia-50', via: 'via-fuchsia-50', to: 'to-fuchsia-50' },
      { parent: 'fuchsia', bg:'bg-fuchsia-100', from: 'from-fuchsia-100', via: 'via-fuchsia-100', to: 'to-fuchsia-100' },
      { parent: 'fuchsia', bg:'bg-fuchsia-200', from: 'from-fuchsia-200', via: 'via-fuchsia-200', to: 'to-fuchsia-200' },
      { parent: 'fuchsia', bg:'bg-fuchsia-300', from: 'from-fuchsia-300', via: 'via-fuchsia-300', to: 'to-fuchsia-300' },
      { parent: 'fuchsia', bg:'bg-fuchsia-400', from: 'from-fuchsia-400', via: 'via-fuchsia-400', to: 'to-fuchsia-400' },
      { parent: 'fuchsia', bg:'bg-fuchsia-500', from: 'from-fuchsia-500', via: 'via-fuchsia-500', to: 'to-fuchsia-500' },
      { parent: 'fuchsia', bg:'bg-fuchsia-600', from: 'from-fuchsia-600', via: 'via-fuchsia-600', to: 'to-fuchsia-600' },
      { parent: 'fuchsia', bg:'bg-fuchsia-700', from: 'from-fuchsia-700', via: 'via-fuchsia-700', to: 'to-fuchsia-700' },
      { parent: 'fuchsia', bg:'bg-fuchsia-800', from: 'from-fuchsia-800', via: 'via-fuchsia-800', to: 'to-fuchsia-800' },
      { parent: 'fuchsia', bg:'bg-fuchsia-900', from: 'from-fuchsia-900', via: 'via-fuchsia-900', to: 'to-fuchsia-900' },
      { parent: 'fuchsia', bg:'bg-fuchsia-950', from: 'from-fuchsia-950', via: 'via-fuchsia-950', to: 'to-fuchsia-950' },
      
      { parent: 'pink', bg:'bg-pink-50', from: 'from-pink-50', via: 'via-pink-50', to: 'to-pink-50' },
      { parent: 'pink', bg:'bg-pink-100', from: 'from-pink-100', via: 'via-pink-100', to: 'to-pink-100' },
      { parent: 'pink', bg:'bg-pink-200', from: 'from-pink-200', via: 'via-pink-200', to: 'to-pink-200' },
      { parent: 'pink', bg:'bg-pink-300', from: 'from-pink-300', via: 'via-pink-300', to: 'to-pink-300' },
      { parent: 'pink', bg:'bg-pink-400', from: 'from-pink-400', via: 'via-pink-400', to: 'to-pink-400' },
      { parent: 'pink', bg:'bg-pink-500', from: 'from-pink-500', via: 'via-pink-500', to: 'to-pink-500' },
      { parent: 'pink', bg:'bg-pink-600', from: 'from-pink-600', via: 'via-pink-600', to: 'to-pink-600' },
      { parent: 'pink', bg:'bg-pink-700', from: 'from-pink-700', via: 'via-pink-700', to: 'to-pink-700' },
      { parent: 'pink', bg:'bg-pink-800', from: 'from-pink-800', via: 'via-pink-800', to: 'to-pink-800' },
      { parent: 'pink', bg:'bg-pink-900', from: 'from-pink-900', via: 'via-pink-900', to: 'to-pink-900' },
      { parent: 'pink', bg:'bg-pink-950', from: 'from-pink-950', via: 'via-pink-950', to: 'to-pink-950' },
      
      { parent: 'rose', bg:'bg-rose-50', from: 'from-rose-50', via: 'via-rose-50', to: 'to-rose-50' },
      { parent: 'rose', bg:'bg-rose-100', from: 'from-rose-100', via: 'via-rose-100', to: 'to-rose-100' },
      { parent: 'rose', bg:'bg-rose-200', from: 'from-rose-200', via: 'via-rose-200', to: 'to-rose-200' },
      { parent: 'rose', bg:'bg-rose-300', from: 'from-rose-300', via: 'via-rose-300', to: 'to-rose-300' },
      { parent: 'rose', bg:'bg-rose-400', from: 'from-rose-400', via: 'via-rose-400', to: 'to-rose-400' },
      { parent: 'rose', bg:'bg-rose-500', from: 'from-rose-500', via: 'via-rose-500', to: 'to-rose-500' },
      { parent: 'rose', bg:'bg-rose-600', from: 'from-rose-600', via: 'via-rose-600', to: 'to-rose-600' },
      { parent: 'rose', bg:'bg-rose-700', from: 'from-rose-700', via: 'via-rose-700', to: 'to-rose-700' },
      { parent: 'rose', bg:'bg-rose-800', from: 'from-rose-800', via: 'via-rose-800', to: 'to-rose-800' },
      { parent: 'rose', bg:'bg-rose-900', from: 'from-rose-900', via: 'via-rose-900', to: 'to-rose-900' },
      { parent: 'rose', bg:'bg-rose-950', from: 'from-rose-950', via: 'via-rose-950', to: 'to-rose-950' },
      

  ])

</script>

<style scoped>
span{
  border-radius: 5px;
}
.active {
  display: block;
}
</style>