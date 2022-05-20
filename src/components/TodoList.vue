<template>
  <section>
    <h1>Todo Tasks</h1>
    <ul>
      <!-- Tasks List  -->
      <li v-for="task in tasks" :key="task.id" draggable="true">
        <p class="task-title">{{ task.title }}</p>
        <p class="task-desc">
          {{ task.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters["getTodoTasks"];
    },
  },
};
</script>

<style></style>
