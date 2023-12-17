<script setup lang="ts">
import {useSupabaseUser} from "#imports";
import type {User} from "@supabase/gotrue-js";
import type {Ref} from "vue";
import type {UserInfo} from "~/types/user";
const user = useSupabaseUser() as Ref<User>;

const {data: currentInfo} = await useFetch<UserInfo | undefined>('/api/user/info', {
  query: {
    userId: user.value.id
  }
})

const nickname = ref(currentInfo.value?.nickname || "");


async function setupUser(){
  if(!nickname.value){
    return;
  }

  await $fetch('/api/user/create',{
    method: 'post',
    body: {
      nickname: nickname.value
    }
  })

  await navigateTo('/game');
}
</script>

<template>
<div>
  <h3 class="text-3xl font-semibold mb-2">Biologie 24</h3>
  <span
    v-if="currentInfo"
    class="block text-sm mb-5 dark:text-slate-200 text-slate-800"
  >
    Uz jsi prihlasen jako: <span class="dark:text-slate-100 text-slate-900 font-semibold">{{currentInfo.nickname}}</span>
  </span>
  <UInput
    v-model="nickname"
    class="mb-5"
    :placeholder="`Zadej svou novou prezdivku`"
  />
  <div class="flex justify-between">
    <NuxtLink
      v-if="currentInfo"
      to="/game"
    >
      <UButton
        class="font-semibold"
      >
        Pokracovat do hry
      </UButton>
    </NuxtLink>
    <UButton
      class="font-semibold"
      :disabled="!nickname"
      @click="setupUser"
    >
      {{currentInfo ? 'Upravit prezdivku' : 'Zaregistrovat se'}}
    </UButton>
  </div>
</div>
</template>
