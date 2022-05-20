<template>
  <section>
    <h1>In Progress Tasks</h1>
    <ul @drop="dropTask('inProgress')" @dragenter.prevent @dragover.prevent>
      <!-- Tasks List  -->
      <li
        v-for="task in tasks"
        :key="task.id"
        @dragstart="startDrag($event, task)"
        draggable="true"
      >
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
  methods: {
    // drag tasks method
    startDrag: function (e, task) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      // store task id to use at drop
      this.$store.dispatch("setMovingTask", task);
    },
    // drop tasks method
    dropTask: function (taskStatus) {
      // get moved task
      const movedTask = this.$store.getters["getMovedTask"];
      // progress list accept moving from both Todo and Done
      // edit moved task status
      movedTask.status = taskStatus;
      // storing updated task status at local storage
      this.$store.dispatch("setLocalStorage");
    },
  },
};
</script>

<style></style>
