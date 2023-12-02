<template>
    <div class="text-zinc-900 h-screen flex items-center justify-center font-indie relative">
        <div class="global-cover bg-fixed" style="background-image:url('/images/auth.png')"></div>

        <section class="w-full max-w-sm bg-white/75 backdrop-blur rounded-xl p-10">
            <h2 class="text-3xl font-bold mb-5 text-center">
                Login
            </h2>
            <form class="flex flex-col gap-5 w-full" @submit.prevent="signIn">
                <input type="email" class="w-full outline-zinc-700 border-2 rounded-lg bg-white  border-zinc-600 p-2.5" placeholder="Your Email" v-model="email">
                <input type="password" class="w-full outline-zinc-700 border-2 rounded-lg bg-white  border-zinc-600 p-2.5" placeholder="Password" v-model="password">
                <button class="bg-zinc-800 text-zinc-100 rounded-xl w-full py-3 flex gap-2 items-center justify-center group" type="submit">
                    Login
                    <svg class="w-5 h-5" v-if="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
                    <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"/><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity=".5"/></g></svg>
                </button>
            </form>
            
            <div class="text-center mt-6 text-sm ">
                Join Boltwind ?
                <NuxtLink to="/auth/join" class="font-bold underline">Join now</NuxtLink>
            </div>

            <NuxtLink to="/" class="text-xs mt-5 flex items-center gap-2 justify-center">
                <UIcon name="i-heroicons-arrow-left" />
                home
            </NuxtLink>
        </section>

        <div class="fixed top-0 bg-pink-600 text-white px-5 py-1 text-sm rounded-b-lg shadow-xl" v-if="errorMsg">{{ errorMsg }}</div>
    </div>
  </template>
  
  <script setup>
      const supabase = useSupabaseClient()
      const router = useRouter();
  
      definePageMeta({
          colorMode: 'dark',
          layout: 'auth'
      })
  
    const email = ref('');
    const password = ref('');
    const errorMsg = ref(null)
  
    const loading = ref(false)
  
    const signIn = async () => {
        try {
            loading.value = true;
            const { error } = await supabase.auth.signInWithPassword({
                email: email.value, 
                password: password.value,
            });
            if(error) throw error;
            router.push({ path: "/admin/dashboard" });
            loading.value = false;
        } catch (error) {
            errorMsg.value = error.message
            loading.value = false;
        }
    }
  </script>
  
<style>

</style>