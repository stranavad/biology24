<script setup lang="ts">
import type {ListGroup} from "~/types/list";
import type {Ref} from "vue";

const {data: groups}: {data: Ref<ListGroup[] | null>} = await useFetch<ListGroup[]>('/api/list/animals');
</script>

<template>
<div>
  <Header title="List"/>
  <div class="flex flex-col">
    <div
      v-for="group in groups"
      :key="group.id"
    >
      <span class="dark:text-slate-100 text-2xl font-semibold">{{group.name}}</span>
      <div
        class="flex flex-wrap justify-between mt-5"
      >
        <div
          v-for="animal in group.animals"
          :key="animal.id"
          class="max-w-[250px] min-h-[300px]"
        >
          <NuxtImg
            class="mb-3"
            width="300px"
            quality="50"
            :alt="animal.name"
            :src="`/animals/${animal.photo}`"
          />
          <span class="font-semibold">{{animal.name}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
