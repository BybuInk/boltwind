<template>
    <div class="flex w-full gap-6 h-full">
        <div class="w-[70%] h-full overflow-y-auto">
            <div class="header flex-between">
                <h2 class="font-bold text-2xl mb-6 border-l-8 pl-3 mt-5 border-zinc-800 font-cairo">My Components</h2>
                <NuxtLink to="/admin/component/add" class="text-sm shadow rounded-lg px-4 py-2 flex-center gap-2 hover:bg-zinc-900 hover:text-white">
                    <span>+</span>
                    Add Component
                </NuxtLink>
            </div>

            <!-- Components -->
            <section class="w-full mt-12 space-y-12">
                <vTabs :tabs="tabs" active="preview" v-for="comp in comps" :key="comp">
                    <template #content="{ active }">
                        <template v-if="active == 'preview'">
                            <div class="p-6 dotted-bg" v-html="comp.code"></div>
                        </template>
                        <template v-if="active == 'html'">
                            <prism-editor 
                                class="my-editor" 
                                :highlight="highlighter"
                                v-model="comp.code"
                            ></prism-editor>
                        </template>
                    </template>
                    <template #copyBtn>
                        <ClientOnly>
                            <CopyToClipboard :content="comp.code" />
                        </ClientOnly>
                    </template>
                </vTabs>
            </section>

        </div>
        <AuthRightSidebar />
    </div>
</template>

<script setup>
    import { PrismEditor } from "vue-prism-editor";
    import "vue-prism-editor/dist/prismeditor.min.css";
    import { highlight, languages } from "prismjs/components/prism-core";
    import "prismjs/components/prism-clike";
    import "prismjs/components/prism-javascript";
    import "prismjs/themes/prism-tomorrow.css";
    
    definePageMeta({
        colorMode: 'light',
        middleware: 'auth',
        layout: 'dashboard'
    })
    
    const publicUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/category/')

    const supabase = useSupabaseClient()
    const loading = ref(false)

    const tabs = ref([
        {
            title: 'Preview',
            value: 'preview'
        },
        {
            title: 'HTML',
            value: 'html'
        },
    ])

    const comps = ref([])

    function highlighter(code) {
      return highlight(code, languages.js);
    }

    let { data: categories } = await supabase.from('categories').select('title, slug, image')

    const fetchData = async () => {
        let { data, error } = await supabase
            .from('components')
            .select('*')
        comps.value = data
    }
    fetchData()

</script>

<style scoped>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 2em;
}

.prism-editor__textarea {
    outline: 0px solid #2d2d2d;
}
.dotted-bg{
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5a5a5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>

