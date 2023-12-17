<template>
  <div class="flex items-center justify-center pt-16">
    <div class="flex flex-col min-w-[450px]">
      <NuxtPage/>
    </div>
<!--    <button @click="logIn()">-->
<!--      LOGIN-->
<!--    </button>-->
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Prochazka zviratky',
  link: [{rel: 'icon', type: 'image/x-icon', href: 'favicon.svg'}]
})
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const route = useRoute();

async function logIn(){
  if(!user.value){
    console.log(window.location);
    const {error} = await supabase.auth.signInWithOAuth({provider: 'google',  options: {
        redirectTo: `${window.location.origin}/login`,
      },});
  }
}
</script>
<style>
body {
  @apply bg-gray-100 dark:bg-gray-900;
}
</style>
