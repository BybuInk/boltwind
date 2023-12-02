<script setup>
  const props = defineProps({
    tabs: { type: Array, default:[], required: true },
    active: { type: String, default : null }
  })

  const activeTab = ref(props.active || props.tabs[0].value);

</script>

<template>
  <div id="tabs">
    <div class="flex-between header" id="tabs-header">
        <div class="button-group flex-center gap-2 dark:bg-zinc-800 bg-gray-100 p-1 rounded-lg">
            <button
                v-for="(tab, index) in tabs"
                :key="index"
                class="text-sm rounded-md px-3 py-1.5 text-gray-400 dark:bg-zinc-800"
                :class="{ active: tab.value === activeTab }"
                @click="activeTab = tab.value"
            >{{tab.title}}</button>
        </div>
        <slot name="copyBtn" />
    </div>
    <div class="w-full border dark:border-zinc-800 mt-4 rounded-xl max-h-[60vh] h-full overflow-y-auto" id="tabs-content">
        <slot name="content" :active="activeTab" />
    </div>
  </div>
</template>

<style scoped>
.active{
  background: white;
  color: #333;
}
</style>

