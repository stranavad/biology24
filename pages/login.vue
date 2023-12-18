<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watch(() => user.value, async(newUser) => {
  if(newUser){
    await navigateTo('/game');
  }
}, {immediate: true, deep: true})

async function login(){
  const {error} = await supabase.auth.signInWithOAuth({provider: 'google',  options: {
      redirectTo: `${window.location.origin}/login`,
    },});
  console.error(error);
}

async function logout(){
  await supabase.auth.signOut();
  localStorage.clear();
  sessionStorage.clear();

  try {
    const cookies = document.cookie;
    for (let i = 0; i < cookies.split(";").length; ++i)
    {
      const myCookie = cookies[i];
      const pos = myCookie.indexOf("=");
      const name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  } catch {

  }
}
</script>

<template>
  <div class="flex items-center flex-col">
    <h2 class="text-3xl font-semibold mb-5">Biologie 24</h2>
    <p class="text-sm dark:text-slate-300 text-slate-700">Aneb jak se naucit poznavacku, s nejmensim usilim</p>
    <UButton class="mt-6 font-semibold" @click="login()">Prihlasit se</UButton>
    <UButton
      class="mt-10"
      size="2xs"
      @click="logout()"
    >
      Vyresit problemy
    </UButton>
    <div v-if="user" class="mt-10">
      <pre class="dark:text-slate-200 text-slate-800">{{user}}</pre>
    </div>
  </div>
</template>

<style scoped>

</style>
