<template>
  <main>
    <AddTask />
    <div class="task-container">
      <TodoList />
      <InProgress />
      <DoneTasks />
    </div>
  </main>
</template>

<script setup>
import TodoList from "../components/TodoList.vue";
import InProgress from "../components/InProgress.vue";
import DoneTasks from "../components/DoneTasks.vue";
import AddTask from "../components/AddTask.vue";
</script>
