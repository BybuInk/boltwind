<template>
    <div class="text-zinc-900 h-screen flex items-center justify-center font-indie relative">
        <div class="global-cover bg-cover bg-center" style="background-image:url('/images/auth.png')"></div>

        <section class="w-full max-w-sm bg-white/75 backdrop-blur rounded-xl p-10">
          <h2 class="text-3xl font-bold mb-5 text-center">
              Create new account!
          </h2>
          <form class="flex flex-col gap-5" @submit.prevent="signUp">
                <input type="text" class="w-full border-2 border-zinc-400 focus:border-zinc-800 focus:outline-none  rounded-lg bg-white p-2.5" placeholder="Full Name" v-model="full_name">
                <input type="email" class="w-full border-2 border-zinc-400 focus:border-zinc-800 focus:outline-none  rounded-lg bg-white p-2.5" placeholder="Your Email" v-model="email">
                <input type="password" class="w-full border-2 border-zinc-400 focus:border-zinc-800 focus:outline-none  rounded-lg bg-white p-2.5" placeholder="New Password" v-model="password">
                <button class="bg-zinc-800 text-zinc-100 rounded-xl w-full py-3 flex gap-3 items-center justify-center group">
                    Create Now
                    <svg v-if="loading" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.524.525-.79 1.17-.929 1.928c-.135.737-.161 1.638-.167 2.72a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399c-.277.277-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008c.006 1.082.032 1.983.167 2.72c.14.758.405 1.403.93 1.928c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116h1.11c1.368 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.121-.9-.38-1.658-.982-2.26c-.602-.602-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117h-1.11Z"/><path fill="currentColor" d="M15 11.25a.75.75 0 0 1 0 1.5H4.027l1.961 1.68a.75.75 0 1 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 1 1 .976 1.14l-1.96 1.68H15Z"/></svg>
                    <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"/><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity=".5"/></g></svg>
                </button>
                <div>{{ successMsg }}</div>
                <div class="text-center text-sm ">
                    Create new account
                    <NuxtLink to="/auth/login" class="font-bold underline">Login</NuxtLink>
                </div>
          </form>
        </section>
    </div>
</template>

<script setup>
    definePageMeta({
        colorMode: 'dark',
        layout: 'auth'
    })

    const supabase = useSupabaseClient()
    const router = useRouter();

    const full_name = ref("")
    const email = ref("")
    const password = ref(null)

    const errorMsg = ref(null)
    const successMsg = ref(null)
    const loading = ref(false)

    async function signUp() {
        loading.value = true
        try {
            const { data, error } = await supabase.auth.signUp({
                full_name: full_name.value,
                email: email.value,
                password: password.value
            });
            if(error) throw error;

            successMsg.value = "Check your email to confirm your account.";
            router.push({ path: "/auth/login" });
        } catch (error) {
            errorMsg.value = error.message;
        }
        loading.value = false
    }
</script>

<style>

</style>