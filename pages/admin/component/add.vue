<template>
  <div class="w-full h-full flex items-center gap-6">
    <section class="w-full h-full">
      <CodeTextarea v-model="code" />
    </section>
    <section class="w-full h-full space-y-6">
      <input type="text" class="w-full p-3 rounded-xl border focus:outline-zinc-800" placeholder="Component title" v-model="title">
      <input type="text" class="w-full p-3 rounded-xl border focus:outline-zinc-800" placeholder="Component slug" v-model="slug">
      <textarea rows="5" class="w-full p-3 rounded-xl border focus:outline-zinc-800" placeholder="About component" v-model="about"></textarea> 
      <USelectMenu
          searchable
          searchable-placeholder="Search category..."
          class="w-full border rounded-xl"
          placeholder="Select category"
          variant="none"
          :options="categories"
          option-attribute="title"
          v-model="category_id"
          size="xl"
      />
      <div class="flex-between gap-5">
        <button class="w-full border px-5 py-4 rounded-lg flex-center gap-1 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50 text-sm transition duration-700 ease-in-out hover:scale-110" @click="isOpen = true">
          Preview
        </button>
        <button class="w-full bg-zinc-900 text-zinc-400 text-sm px-5 py-4 rounded-lg hover:scale-110 transition duration-700 ease-in-out hover:text-zinc-100 flex-center gap-1" @click="addComponent">
          Add Component
          <IconsLoading v-if="loading" class="h-5 w-5" />
        </button>
      </div>
    </section>

    <!-- Component Preview -->
    <UModal v-model="isOpen" fullscreen>
      <UCard class="h-screen overflow-y-auto relative w-full">
        <template #header>
          <div class="flex items-center justify-between sticky top-0">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Component Preview
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <div class="p-12 h-full overflow-y-auto  w-full" v-html="code"></div>
      </UCard>
    </UModal>

  </div>
  
</template>

<script setup>
  const user = useSupabaseUser()
  const router = useRouter();

  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'dashboard'
  })

  const supabase = useSupabaseClient()

  const loading = ref(false)

  const isOpen = ref(false)

  const title = ref('')
  const slug = ref('')
  const about = ref('')
  const code = ref('')
  const category_id = ref(null)

  let { data: categories } = await supabase.from('categories').select ('*')

  const addComponent = async () => {
    loading.value = true
    const { data, error } = await supabase
      .from('components')
      .insert([
        { 
          title: title.value, 
          slug: slug.value, 
          about: about.value,
          code: code.value,
          user_id: user.value.id, 
          category_id : category_id.value.id
        },
      ])
      .select()
    loading.value = false
    router.navigate('/admin/component')
  }

</script>

<style>

</style>

