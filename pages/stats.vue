<script setup lang="ts">
import type {LeaderboardItem} from "~/types/game";
import type {Ref} from "vue";
const currentUser = useSupabaseUser();

const {data}: {data: Ref<LeaderboardItem[]>} = await useFetch<LeaderboardItem[]>('/api/stats/leaderboard');
</script>
<template>
<div>
  <Header title="Leaderboard"/>
  <div
    v-for="(user, index) in data"
    class="flex justify-between"
    :class="user.userId === currentUser!.id ? 'text-green-500' : 'dark:text-gray-400 text-gray-700'"
  >
    <span class="text-md">
    <span class="font-semibold mr-2">{{ index + 1 }}. </span>
    {{ user.nickname }}
    </span>
    <div class="flex items-center gap-4">
      <span class="text-xs text-gray-400">
        <span class="text-green-500">{{user.correct}}</span>
        /
        <span class="text-red-500">{{user.wrong}}</span>
      </span>
      <span class="text-sm">
          {{ user.points }}
      </span>
      <span class="text-md font-semibold">
        {{ user.percentage }}%
      </span>
    </div>
  </div>
</div>
</template>
