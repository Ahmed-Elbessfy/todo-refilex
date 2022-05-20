<template>
  <main>
    <TodoList />
    <InProgress />
    <DoneTasks />
  </main>
</template>

<script setup>
import TodoList from "../components/TodoList.vue";
import InProgress from "../components/InProgress.vue";
import DoneTasks from "../components/DoneTasks.vue";
</script>
