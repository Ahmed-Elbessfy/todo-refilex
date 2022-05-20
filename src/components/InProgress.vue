<template>
  <section>
    <h1>In Progress Tasks</h1>
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
      return this.$store.getters["getInProgressTasks"];
    },
  },
};
</script>

<style></style>
