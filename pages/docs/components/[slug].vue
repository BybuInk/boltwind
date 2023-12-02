<template>
  <div class="w-full h-full overflow-y-auto px-20 py-16">
      <section class="max-w-5xl mx-auto space-y-16">
        <div class="component-container relative" v-for="comp in comps" :key="comp">
          <!-- Card-Header -->
          <div class="header flex justify-between items-end">
            <div class="w-full">
              <h2 class="text-2xl font-semibold text-zinc-800 dark:text-zinc-200"># {{comp.title}}</h2>
              <p class="text-sm text-zinc-700 dark:text-zinc-500" v-if="comp.about">{{ comp.about }}</p>
            </div>
            <div class="w-full hidden items-center gap-1 justify-end">
              <h4 class="text-xs text-zinc-400">By :</h4>
              <img src="/images/avatar.png" alt="user-image" class="w-5 h-5 rounded-full object-cover">
              <NuxtLink to="/u/profile" class="text-xs text-zinc-600 hover:underline">Vimal Bharti</NuxtLink>
            </div>
          </div>

          <!-- Card-body -->
          <section class="w-full mt-8 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-xl p-3 card">
            <div class="p-6 flex items-center justify-center bg-white dark:bg-zinc-900" v-html="comp.code"></div>
            <!-- Card-footer -->
            <div class="card-footer flex items-center justify-center space-x-3 relative">
              <ClientOnly>
                <CopyToClipboard :content="comp.code" @click="copyBtnHandle" />
              </ClientOnly>
              <!-- Code Snippet -->
              <UPopover>
                <button class="h-8 w-8 rounded-lg flex items-center justify-center shadow-inner border border-zinc-100 dark:border-zinc-700">
                  <UIcon name="i-heroicons-code-bracket" class="h-5 w-5 text-zinc-800 dark:text-zinc-600" />
                </button>
                <template #panel>
                  <div class="w-[60vw] max-h-[50vh]">
                    <prism-editor 
                      class="my-editor rounded-lg" 
                      :highlight="highlighter"
                      v-model="comp.code"
                    ></prism-editor>
                  </div>
                </template>
              </UPopover>
            </div>
          </section>
        </div>  
      </section>

      <div class="fixed left-0 right-0 top-4 flex-center">
        <Transition name="bounce">
          <span v-if="ifCopied" class="text-[14px] bg-zinc-800 px-6 py-2 rounded">
            Copied
          </span>
        </Transition>
      </div>
  </div>
</template>

<script setup>
  import { PrismEditor } from "vue-prism-editor";
  import "vue-prism-editor/dist/prismeditor.min.css";
  import { highlight, languages } from "prismjs/components/prism-core";
  import "prismjs/components/prism-clike";
  import "prismjs/components/prism-javascript";
  import "prismjs/themes/prism-tomorrow.css";

  const toast = useToast()
  const route = useRoute()
  const supabase = useSupabaseClient()

  definePageMeta({
    colorMode: 'dark',
    layout: 'docs'
  })

  useHead({
    title: `Boltwind - Tailwind ${route.params.slug}`,
    meta: [
      { name: 'description', content: `Boltwind - Tailwind ${route.params.slug}` }
    ],
  })

  const ifCopied = ref(false);

  const copyBtnHandle = () => {
    ifCopied.value = true
    setTimeout(() => {
      ifCopied.value = false
    }, 2000)
  }
  const comps = ref([])

  function highlighter(code) {
    return highlight(code, languages.js);
  }
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
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5a5a5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e3e2e5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
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