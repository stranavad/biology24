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
      <span class="dark:text-slate-100 text-xl font-semibold">{{group.name}}</span>
    </div>
  </div>
</div>
</template>
