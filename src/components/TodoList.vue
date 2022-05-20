<template>
  <section>
    <h1>Todo Tasks</h1>
    <ul @drop="dropTask('todo')" @dragenter.prevent @dragover.prevent>
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
      return this.$store.getters["getTodoTasks"];
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
      // Todo list accept from in progress list
      // edit moved task status
      movedTask.status = taskStatus;
      // storing updated task status at local storage
      this.$store.dispatch("setLocalStorage");
    },
  },
};
</script>

<style></style>
