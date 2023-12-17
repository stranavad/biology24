<script setup lang="ts">
import {useSupabaseUser} from "#imports";

const user = useSupabaseUser();
const {data: animal} = await useFetch('/api/game/get-random-animal');
const {data: userInfo} = await useFetch('/api/user/info', {query: {userId: user.value!.id}});
const incorrectAnswers = ref<string[]>([]);

async function checkAnswer(answer: string){
  if(!animal.value){
    return;
  }

  if(incorrectAnswers.value.includes(answer)){
    return;
  }

  const res = await $fetch('/api/game/check-answer', {
    method: 'post',
    body: {
      id: animal.value.id,
      answer
    }
  });

  if(userInfo.value){
    userInfo.value.points = res.score;
  }


  if(res.correct){
    incorrectAnswers.value = [];
    animal.value = await $fetch('/api/game/get-random-animal')
  } else {
    incorrectAnswers.value.push(answer);
  }
}

</script>

<template>
<div v-if="animal">
  <Header title="Game"></Header>
  <div class="flex flex-col gap-2">
    <NuxtImg
      width="550"
      quality="50"
      :key="animal.photo"
      :src="`/animals/${animal.photo}`"
    />
      <div
        v-for="(answer, index) in animal.answers"
        :key="`${animal.id}-${answer}-${index}`"
        class="flex bg-slate-800 rounded-md px-3 py-2 cursor-pointer hover:bg-slate-700 transition-colors duration-100"
        @click="checkAnswer(answer)"
      >
        {{answer}}
        <div class="ml-auto">
          <UIcon v-if="incorrectAnswers.includes(answer)" name="i-heroicons-x-mark-20-solid" class="text-red-500"/>
<!--          <UIcon name="i-heroicons-check-solid text-green-500"/>-->
        </div>
      </div>
  </div>
</div>
</template>

<style scoped>

</style>
