<script setup lang="ts">
import {useSupabaseUser} from "#imports";

const nickname = ref("");

const user = useSupabaseUser();

async function setupUser(){
  if(!user.value){
    return;
  }
  const animal = await $fetch('/api/game/get-random-animal');
  if(animal){
    await $fetch('/api/game/check-answer', {
      method: 'post',
      body: {
        id: animal.id,
        answer: animal.answers[0]
      }
    })
  }
  await $fetch('/api/user/info', {
    query: {
      userId: user.value!.id
    }
  });
}
</script>

<template>
<div>
  <h3 class="text-3xl font-semibold mb-2">Vitej</h3>
  <UInput
    v-model="nickname"
    class="mb-2"
    placeholder="Zadej svou prezdivku"
  />
  <UButton
    @click="setupUser"
  >
    Pokracovat
  </UButton>
</div>
</template>

<style scoped>

</style>
