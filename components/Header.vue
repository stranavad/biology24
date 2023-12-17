<script setup lang="ts">
defineProps<{
  title: string;
}>()

const route = useRoute();
const items = computed(() => {
  if(route.path === '/game'){
    return [
      {
        to: '/stats',
        text: 'Leaderboard'
      }
    ]
  }
  return [
    {
      to: '/game',
      text: 'Game'
    }
  ]
})
</script>

<template>
<div class="flex justify-between items-center mb-5">
  <div class="flex items-center">
    <span class="text-xl font-semibold dark:text-slate-100 text-slate-900">
      {{title}}
    </span>
    <NuxtLink to="/setup" class="block ml-2 mt-2">
      <UIcon name="i-heroicons-cog-8-tooth"/>
    </NuxtLink>
  </div>
  <NuxtLink v-for="item in items" :key="item.to" :to="item.to" class="uppercase text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors duration-200">{{item.text}}</NuxtLink>
</div>
</template>

<style scoped>

</style>
