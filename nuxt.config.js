export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "dayjs-nuxt",
    "@nuxtjs/supabase",
    "nuxt-icons",
    "@vueuse/nuxt",
    '@nuxt/ui'
  ],
  supabase: {
    redirect: false,
  },
  ssr: false,
  routeRules: {
    // '/admin/component': { prerender: true },
  },
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