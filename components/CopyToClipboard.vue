<script setup>
  import { useClipboard } from '@vueuse/core'
  const { text, copy, copied, isSupported } = useClipboard()

  const status = ref('idle');

  const props = defineProps({
    content: { type: String }
  })

</script>

<template>
  <div v-if="isSupported">
    <button @click='copy(content)' class="h-8 w-8 rounded-lg flex items-center justify-center shadow-inner border border-zinc-100 dark:border-zinc-700">
      <!-- <span class="text-xs" v-if='!copied'>🎉 Copied!</span> -->
      <!-- <span v-if='!copied'>Copy</span> -->
      <UIcon name="i-heroicons-document-duplicate" class="h-5 w-5 text-zinc-800 dark:text-zinc-600" />
    </button>
  </div>
</template>