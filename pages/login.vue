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
</script>

<template>
  <div class="flex items-center flex-col">
    <h2 class="text-3xl font-semibold mb-5">Biologie 24</h2>
    <p class="text-sm dark:text-slate-300 text-slate-700">Aneb jak se naucit poznavacku, s nejmensim usilim</p>
    <UButton class="mt-6 font-semibold" @click="login()">Prihlasit se</UButton>
    <div v-if="user" class="mt-10">
      <pre class="dark:text-slate-200 text-slate-800">{{user}}</pre>
    </div>
  </div>
</template>

<style scoped>

</style>
