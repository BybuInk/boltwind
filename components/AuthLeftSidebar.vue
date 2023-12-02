<template>
  <section class="h-full w-[7%]">
    <div class="w-full h-full rounded-3xl bg-zinc-900 flex flex-col justify-between items-center py-6">
      <div class="flex flex-col justify-between items-center gap-5 w-full">
        <button class="bg-white rounded-2xl w-12 h-12 flex items-center justify-center">
          <nuxt-icon name="bolt" class="text-zinc-900 text-2xl" />
        </button>
        <div class="w-full space-y-2 mt-2 pl-4">
          <NuxtLink 
            class="w-full h-16 relative group flex flex-col items-start justify-center sidebar-links hover:bg-white rounded-l-full pl-5"
            v-for="link in links"
            :key="link"
            :to="link.path"
          >
            <b class="hidden group-hover:block"></b>
            <b class="hidden group-hover:block"></b>
            <nuxt-icon :name="link.icon" class="text-zinc-100 text-2xl group-hover:text-zinc-900 relative" />
            <span class="text-[10px] text-zinc-900">{{ link.name }}</span>
          </NuxtLink>
          </div>
      </div>
      <!-- Logout -->
      <button class="rounded-full w-12 h-12 flex items-center justify-center" @click="logout">
        <nuxt-icon name="logout" class="text-3xl text-white hover:scale-125 transition duration-700 ease-in-out hover:text-lime-400" />
      </button>
    </div>
  </section>
</template>

<script setup>
  const supabase = useSupabaseClient()
  const router = useRouter();

  const links = ref([
    { icon: 'dashboard', name: 'home', path: '/admin/dashboard' },
    { icon: 'component', name: 'components', path: '/admin/component' },
    { icon: 'category', name: 'categories', path: '/admin/category' },
    { icon: 'message', name: 'messages', path: '/admin/message' },
    { icon: 'users', name: 'subscriber', path: '/admin/subscriber' },
    { icon: 'setting', name: 'profile', path: '/admin/profile' },
  ])

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    router.push({ path: "/" });
  }
</script>

<style setup>
  .sidebar-links b:nth-child(1){
    position: absolute;
    top: -20px;
    height: 20px;
    width: 75%;
    background: #fff;
  }
  .sidebar-links b:nth-child(1)::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: #18181b;
  }
  .sidebar-links b:nth-child(2){
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 75%;
    background: #fff;
  }
  .sidebar-links b:nth-child(2)::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: #18181b;
  }
</style>

