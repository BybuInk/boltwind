<template>
  <div class="w-full h-full overflow-y-auto p-12">
    <div class="grid grid-cols-4 gap-6">
        <div class="w-full rounded-lg relative border border-zinc-700" v-for="category in categories">
            <img :src="publicUrl+category.image" alt="" class="w-full h-[20vh] object-cover">
            <div class="px-4 py-3">
                <h2 class="text-md text-zinc-300 font-semibold w-full">{{ category.title }}</h2>
                <p class="text-sm text-zinc-500">02</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

  definePageMeta({
    colorMode: 'dark',
    layout: 'docs'
  })
  const supabase = useSupabaseClient()

  const publicUrl = ref('https://ixnljmlklijspeokwrfl.supabase.co/storage/v1/object/public/categories/')

  let { data: categories } = await supabase.from('categories').select('title, slug, image')

</script>

<style scoped>
.dotted-bg{
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5a5a5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e3e2e5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>