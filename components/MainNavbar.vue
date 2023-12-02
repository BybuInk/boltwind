<template>
  <nav class="dark:bg-zinc-900 bg-white h-[52px] border-b dark:border-zinc-800 flex justify-between items-center px-3">
        <NuxtLink to="/" class="px-2 flex items-center gap-2">
            <img src="/images/logo.png" alt="" class="w-9 h-9">
            <span class="dark:text-zinc-200 text-zinc-800">Boltwind</span>
        </NuxtLink>

        <div class='hidden md:flex items-center gap-10'>
            <NuxtLink to="/docs" class="flex gap-1 items-center justify-center">
                <button class="h-9 w-9 rounded-xl dark:border-zinc-800 dark:hover:bg-zinc-950 border bg-white dark:bg-zinc-900 flex items-center justify-center">
                    <nuxt-icon name="circum" class="dark:text-zinc-200 text-zinc-800 text-xl" />
                </button>
                <span class="text-[12px] dark:text-zinc-400 text-zinc-600">Components</span>
            </NuxtLink>
            <NuxtLink to="/gradient/generator" class="flex gap-1 items-center justify-center">
                <button class="h-9 w-9 rounded-xl dark:border-zinc-800 dark:hover:bg-zinc-950 border bg-white dark:bg-zinc-900 flex items-center justify-center">
                  <nuxt-icon name="gradient" class="dark:text-zinc-200 text-zinc-800 text-xl" />
                </button>
                <span class="text-[12px] dark:text-zinc-400 text-zinc-600">Gradients</span>
            </NuxtLink>
            <!-- <NuxtLink to="/" class="flex gap-1 items-center justify-center">
                <button class="h-9 w-9 rounded-xl dark:border-zinc-800 overflow-hidden dark:hover:bg-zinc-950 border bg-white dark:bg-zinc-900 flex items-center justify-center">
                    <img src="/images/preview.png" alt="bolt-avatar" class="w-full h-full object-cover" />
                </button>
                <span class="text-[12px] dark:text-zinc-400 text-zinc-600">Avatars</span>
            </NuxtLink> -->
            <!-- <NuxtLink to="/blog" class='flex gap-1 items-center justify-center'>
                <button class="h-9 w-9 rounded-xl dark:border-zinc-800 dark:hover:bg-zinc-950 border bg-white dark:bg-zinc-900 flex items-center justify-center">
                  <nuxt-icon name="file" class="dark:text-zinc-200 text-zinc-800 text-xl" />
                </button>
                <span class="text-[12px] dark:text-zinc-400 text-zinc-600">Blog</span>
            </NuxtLink> -->
        </div>

        <div class='flex items-center gap-2'>
            <!-- <ClientOnly>
                <UButton
                    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                    color="gray"
                    variant="ghost"
                    aria-label="Theme"
                    @click="toggleTheme"
                />
                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly> -->

            <div class="flex items-center gap-2 text-sm border dark:border-zinc-800 bg-white dark:bg-zinc-900 py-2 px-3 rounded-lg md:w-44 cursor-pointer group" @click="openModal">
                <UIcon name="i-heroicons-magnifying-glass" class="text-lime-300 group-hover:scale-125 transition duration-300 ease-in-out" />
                <span class="dark:text-zinc-400 text-zinc-600 hidden md:flex">Search...</span>
            </div>

            <!-- Login -->
            <NuxtLink to="/auth/login" class="flex-center">
                <button class="h-9 w-9 rounded-xl dark:border-zinc-800 dark:hover:bg-zinc-950 border bg-white dark:bg-zinc-900 flex items-center justify-center">
                  <UIcon name="i-heroicons-user" class="dark:text-zinc-200 text-zinc-800 text-xl" />
                </button>
            </NuxtLink>
        </div>

        <!-- Search List result -->
        <UModal v-model="isOpen">
            <div
                class="w-full transform overflow-hidden rounded text-left align-middle shadow-xl transition-all bg-zinc-950"
            >
                <div class="search-input border-b border-zinc-900 flex items-center px-5">
                    <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 text-zinc-500" />
                    <input type="text" class="bg-zinc-950 w-full p-5 focus:outline-0 dark:text-zinc-400 text-zinc-600" placeholder="Search Components..." v-model="search">
                    <span class="text-sm bg-white dark:bg-zinc-900 border dark:border-zinc-800 text-zinc-500 rounded px-3 py-1.5">esc</span>
                </div>
                <div class="p-5 space-y-2 max-h-[300px] h-full overflow-y-auto">
                    <NuxtLink 
                        class="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl group"
                        v-for="category in filteredList"
                        :key="category.id"
                        :to="`/docs/components/${category.slug}`"
                        @click="isOpen = false"
                    >
                        <IconsDocument class="w-5 h-5 dark:text-zinc-400 text-zinc-600 group-hover:text-lime-500" />
                        <span class="dark:text-zinc-400 text-zinc-600">{{ category.title }}</span>
                        <IconsForward class="ml-auto w-5 h-5 dark:text-zinc-400 text-zinc-600 group-hover:text-lime-500" />
                    </NuxtLink>
                </div>
            </div>
        </UModal>
    </nav>
</template>

<script setup>
  const supabase = useSupabaseClient()

  const search = ref('')

  const colorMode = useColorMode()
  const q = ref('')

  const isOpen = ref(false)
  function closeModal() {
      isOpen.value = false
  }
  function openModal() {
      isOpen.value = true
  }

  let { data: categories } = await supabase.from('categories').select('title, slug')

  const filteredList = computed(() => {
      return categories.filter(post => {
          return post.title.toLowerCase().includes(search.value.toLowerCase())
      })
  }) 

    const isDark = computed({
        get () {
            return colorMode.value === 'dark'
        },
        set () {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        }
    })

  const toggleTheme = () => {
      if (colorMode.value === 'dark') {
        colorMode.value = 'light'
      } else {
        colorMode.value = 'dark'
      }
  }

  const products = ref([
      { name: 'Tailwind Components', description: 'Ready to use tailwind components, free', icon: 'circum:grid-4-1', link: '/docs'},
      { name: 'Tailwind Gradient', description: 'Tailwind gradient generator', icon: 'mdi-gradient-horizontal', link: '/gradient-generator'}
  ])

  const items = [
      [{
          label: 'Settings',
          icon: 'i-heroicons-cog-8-tooth'
      }], [{
          label: 'Documentation',
          icon: 'i-heroicons-book-open'
      }, {
          label: 'Changelog',
          icon: 'i-heroicons-megaphone'
      }, {
          label: 'Status',
          icon: 'i-heroicons-signal'
      }], [{
          label: 'Sign out',
          icon: 'i-heroicons-arrow-left-on-rectangle'
      }]
  ]
</script>

<style>

</style>

