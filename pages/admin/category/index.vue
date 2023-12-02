<template>
    <div class="flex w-full gap-6 h-full">
        <div class="w-[70%] h-full overflow-y-auto">
            <h2 class="font-bold text-2xl mb-6 border-l-8 pl-3 mt-5 border-zinc-800 font-cairo">Component Categories</h2>

            <div class="grid grid-cols-3 gap-6 mt-8">
                <div class="w-full rounded-lg relative border" v-for="category in categories">
                    <img :src="publicUrl+category.image" alt="" class="w-full h-[20vh] object-cover">
                    <div class="px-4 py-3">
                        <h2 class="text-md font-semibold w-full">{{ category.title }}</h2>
                        <p class="text-sm text-zinc-500">02</p>
                    </div>
                </div>
            </div>
        </div>
        <AuthRightSidebar />
    </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'dashboard'
  })
  const publicUrl = ref('https://ixnljmlklijspeokwrfl.supabase.co/storage/v1/object/public/categories/')

  const supabase = useSupabaseClient()
  
  const loading = ref(false)

    const q = ref('')
    const categories = ref([])

    const fetchData = async () => {
        let { data } = await supabase
        .from('categories')
        .select ('*')
        categories.value = data
    }
    fetchData()

    const filteredRows = computed(() => {
        if (!q.value) {
            return categories.value
        }
        return categories.value.filter((cat) => {
            return Object.values(cat).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
            })
        })
    })

</script>

<style>

</style>

