<template>

      <!-- Hero-area -->
      <section class="h-[80vh] md:h-full overflow-hidden bg-transparent dark:bg-transparent relative  w-full  overflow-x-hidden homeMain magicpattern">
          <div class="glow-background bg-gradient-to-r from-[#30CFD0] to-[#c7d954] blur-3xl rounded-full shadow-lg shadow-cyan-500/50 w-[25%] h-[80%] absolute opacity-50 -right-32 top-28"></div>
          <div class="glow-background bg-gradient-to-r from-[#30CFD0] to-[#c7d954] blur-3xl rounded-full shadow-lg shadow-cyan-500/50 w-[25%] h-[80%] absolute opacity-50 -left-32 top-28 -z-0"></div>

          <!-- Hero - Text -Content -->
          <div class="hero-area gap-12 w-full h-full">
              <div class="hero-text mx-auto text-center md:w-2/5 w-full flex flex-col justify-center h-full">
                  <div class="text-zinc-100 font-bold">
                      <span class="text-[5em]">अ</span> 
                      <!-- <div class="flex justify-center"><img src="/images/a.png" /></div> -->
                      <br/> 
                      <span class="font-cairo textGradient font-bold text-[3em]">Super Charged</span> 
                      <br/> 
                      <span class="font-cairo text-[2em] text-zinc-100 md:text-[3em]">Tailwind Component</span>
                  </div>
                  <div class="text-zinc-400 font-edu text-xl">Innovate, Design, Inspire  | Crafting Stunning Interfaces</div>
                  <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-12 buttons-group z-10 px-12">
                        <div class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
                            <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">
                                <a href="https://marketplace.visualstudio.com/items?itemName=Bybuink.boltwind" target="_blank">VSCode Extension</a>
                            </button>
                        </div>
                        <div class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
                            <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">Get started</button>
                        </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- all products for mobile screen -->
      <section class="md:hidden grid grid-cols-2 gap-4 px-3 mb-12">
          <NuxtLink to="/docs" class="flex gap-1 items-center w-full bg-zinc-800 rounded-xl p-1">
              <button class="h-9 w-9 rounded-xl border-zinc-800 hover:bg-zinc-950 shadow-lg border bg-zinc-900 flex items-center justify-center">
                <nuxt-icon name="circum" class="dark:text-zinc-200 text-zinc-800 text-xl" />
              </button>
              <span class="text-[12px] text-zinc-400">Components</span>
          </NuxtLink>
          <NuxtLink to="/gradient/generator" class="flex gap-1 items-center w-full bg-zinc-800 rounded-xl p-1">
              <button class="h-9 w-9 rounded-xl border-zinc-800 hover:bg-zinc-950 shadow-lg border bg-zinc-900 flex items-center justify-center">
                <nuxt-icon name="gradient" class="dark:text-zinc-200 text-zinc-800 text-xl" />
              </button>
              <span class="text-[12px] text-zinc-400">Gradients</span>
          </NuxtLink>
          <!-- <NuxtLink to="/" class="flex gap-1 items-center bg-zinc-800 rounded-xl p-1">
              <button class="h-9 w-9 rounded-xl border-zinc-800 overflow-hidden hover:bg-zinc-950 shadow-lg border bg-zinc-900 flex items-center justify-center">
                  <img src="/images/preview.png" alt="bolt-avatar" class="w-full h-full object-cover" />
              </button>
              <span class="text-[12px] text-zinc-400">Avatars</span>
          </NuxtLink> -->
          <!-- <NuxtLink to="/blog" class='flex gap-1 items-center bg-zinc-800 rounded-xl p-1'>
              <button class="h-9 w-9 rounded-xl border-zinc-800 hover:bg-zinc-950 shadow-lg border bg-zinc-900 flex items-center justify-center">
                  <Icon name="mdi-file-document" class="w-5 h-5 text-zinc-200" />
              </button>
              <span class="text-[12px] text-zinc-400">Blog</span>
          </NuxtLink> -->
      </section>

      <!-- Reusable Components -->
      <section class="relative w-full overflow-hidden bg-zinc-900">
          <div class="max-w-7xl w-full h-full md:h-[90vh] pb-12 md:pb-0">
              <div class="flex flex-col md:flex-row justify-center items-center gap-12 w-full h-full px-3 md:px-0">
                  <div class="h-full md:w-[50%]">
                      <img src="/images/hero.png" alt="" class="w-full h-full object-cover">
                  </div>
                  <div class="md:w-[50%] h-full flex flex-col justify-center items-start">
                      <h5 class="text-sm font-medium text-lime-500">Components</h5>
                      <h2 class="text-zinc-200 text-4xl mb-6 font-medium">Tailwind Components and <br/> <span class="textGradient">easy to implement</span></h2>
                      <p class="text-zinc-300 mb-6">Start developing with an open-source library of Tailwind UI components</p>
                      <div class="flex items-center flex-wrap gap-2 w-[80%]">
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">navbar</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">testimonial</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">footer</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">buttons</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">alert</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">hero Section</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">cookies</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">card</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">form</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">skeleton</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">dummy Text</span>
                          <span class="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">breadcrumbs</span>
                      </div>
                      <NuxtLink to="/docs" class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
                            <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">Browse Components</button>
                        </NuxtLink>
                  </div>
              </div>
          </div>
          <div class="glow-background bg-gradient-to-r from-[#30CFD0] to-[#c7d954] blur-2xl rounded-full shadow-lg shadow-cyan-500/50 w-[30%] h-[60%] absolute opacity-25 -right-20 -bottom-20 -z-0"></div>
      </section>

      <!-- VSCode Extension -->
      <section class="relative w-full overflow-hidden bg-zinc-900">
          <div class="max-w-6xl mx-auto md:h-screen h-full flex flex-col md:flex-row justify-center items-center gap-20 px-3 md:px-0 py-12 md:py-0">
              <div class="w-full">
                  <div>
                      <h5 class="text-sm font-medium text-lime-500">Extension</h5>
                      <h2 class="text-4xl font-medium text-zinc-300">Every Component you need is <span class="textGradient font-bold">ready for production</span></h2>
                      <p class="text-zinc-400 mt-5">An effortless way to initiate with the tailwind components. With this extension, you can use the required commands as per the commands mention in documentation.</p>
                  </div>
                  <div class="mt-6 space-y-4">
                      <div class="group flex gap-4 w-full items-center px-4 py-4 text-sm bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl">
                          <button class="bg-lime-700/10 rounded-xl h-12 w-12 flex-center">
                              <IconsInstall class="text-lime-500 w-6 h-6" />
                          </button>
                          <div class="text-left">
                              <h3 class="text-lg text-zinc-200">Install</h3>
                              <p class="text-sm text-zinc-500">Install the VSCode extension from marketplace</p>
                          </div>
                      </div>
                      <div class="group flex gap-4 w-full items-center px-4 py-4 text-sm bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl">
                          <button class="bg-lime-700/10 rounded-xl h-12 w-12 flex-center">
                              <IconsSync class="text-lime-500 w-6 h-6" />
                          </button>
                          <div class="text-left">
                              <h3 class="text-lg text-zinc-200">Realod</h3>
                              <p class="text-sm text-zinc-500">Reload VSCodes</p>
                          </div>
                      </div>
                      <div class="group flex gap-4 w-full items-center px-4 py-4 text-sm bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl">
                          <button class="bg-lime-700/10 rounded-xl h-12 w-12 flex-center">
                              <IconsMonitor class="text-lime-500 w-6 h-6" />
                          </button>
                          <div class="text-left">
                              <h3 class="text-lg text-zinc-200">Ready to use</h3>
                              <p class="text-sm text-zinc-500">Tailwind Components Snippets are ready to use</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="w-full h-full hidden md:flex items-center relative">
                  <img src="/images/code.jpg" alt="boltwind-vscode-extension" class="absolute top-[20%] right-0 w-[80%] shadow-xl shadow-lime-400/10 rounded-xl">
                  <img src="/images/boltwind.gif" alt="boltwind-vscode-extension" class="absolute top-[35%] left-0 w-[80%] shadow-lg shadow-lime-400/25 rounded-xl">
              </div>
          </div>
          <div class="glow-background bg-gradient-to-r from-[#30CFD0] to-[#c7d954] blur-2xl rounded-full shadow-lg shadow-cyan-500/50 w-[30%] h-[60%] absolute opacity-25 -left-20 -bottom-20 -z-0"></div>
      </section>

      <!-- Templates -->
      <section class="md:h-screen overflow-hidden pt-20 bg-zinc-900">
          <header class="text-center">
              <h2 class="text-3xl font-medium text-zinc-200">Ready to use Templates</h2>
              <div class="inline-block bg-gradient-to-tl from-[#C7D954] via-transparent to-[#30CFD0] hover:bg-gradient-to-tr rounded-xl mt-8 py-0.5 px-0.5">
                    <button class="bg-white dark:bg-zinc-900 w-full px-12 py-3 h-full rounded-xl text-zinc-800 dark:text-zinc-100 ">Coming Soon</button>
                </div>
          </header>
          <img src="/images/templates.png" alt="boltwind-templates" class="w-full blur-sm">
      </section>

      <!-- Footer -->
      <footer class='p-4 shadow hidden md:flex md:items-center md:justify-between md:p-6 bg-zinc-900 w-full border-t border-zinc-800'>
          <span class='text-sm text-zinc-500 sm:text-center dark:text-zinc-400'>© 2023 <a href='https://boltwind.ink/' class='hover:underline'>Boltwind</a>. All Rights Reserved.</span>
          <div class='flex flex-wrap gap-5 items-center justify-between text-sm text-zinc-500 dark:text-zinc-400'>
            <div class="w-full flex items-center gap-1 justify-end">
              <h4 class="text-xs text-zinc-400">Inked By :</h4>
              <img src="/images/charlie.png" alt="user-image" class="w-6 h-6 rounded-full object-cover">
              <a href="https://twitter.com/vimal_bharti" target="_blank" class="text-xs text-zinc-300 hover:underline">Vimal Bharti</a>
            </div>
          </div>
      </footer>

</template>

<script setup>

  useHead({
    title: 'Boltwind - vscode extension for tailwind',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'A Super Charged Tailwind Component Extension for VsCode' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  })

  

</script>

<style scoped>
.hoomeMain{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='250' height='250'%3E%3Cpath fill='grey' fill-opacity='0.02' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}

.magicpattern { 
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='250' height='250'%3E%3Cpath fill='grey' fill-opacity='0.02' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
</style>