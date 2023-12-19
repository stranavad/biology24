<template>
  <div class="max-w-xl mx-auto mt-2 px-3">
    <NuxtPage/>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Prochazka zviratky',
  link: [{rel: 'icon', type: 'image/x-icon', href: 'favicon.svg'}]
})

onMounted(() => {
  localStorage.removeItem('nuxt-color-mode');
})
</script>
<style>
body {
  @apply bg-gray-100 dark:bg-gray-900;
}
</style>
