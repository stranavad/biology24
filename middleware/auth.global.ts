export default defineNuxtRouteMiddleware(async (to, _from) => {
  if(to.path === '/'){
    return navigateTo('/game');
  }

  if(to.path === '/login'){
    return;
  }

  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo('/login')
  }

  if(to.path === '/setup'){
    return;
  }

  // Check if user info is created
  const info = await $fetch('/api/user/info', {
    query: {
      userId: user.value!.id
    }
  });

  if(!info){
    return navigateTo('/setup');
  }
})

