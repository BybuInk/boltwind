
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "dayjs-nuxt",
    "@nuxtjs/supabase",
    "nuxt-icons",
    "@vueuse/nuxt"
  ],
  supabase: {
    redirect: false,
  },
  ssr: false,
  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: false,
  },
  colorMode: {
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})