<template>
  <section>
    <h1>Done Tasks</h1>
    <ul
      class="done-tasks"
      @drop="dropTask('done')"
      @dragenter.prevent
      @dragover.prevent
    >
      <!-- Tasks List  -->
      <!-- done task is not draggable  -->
      <li v-for="task in tasks" :key="task.id">
        <div class="task-content">
          <p class="task-title">{{ task.title }}</p>
          <p class="task-desc">
            {{ task.description }}
          </p>
        </div>
        <div class="task-actions">
          <!-- delete task button -->
          <fa
            icon="xmark"
            size="xl"
            @click="deleteTask(task.id)"
            :style="{
              color: '#bf0000',
              cursor: 'pointer',
              marginBottom: '2rem',
            }"
            title="Delete task"
          />
          <!-- edit task button  -->
          <fa
            icon="pen-to-square"
            size="lg"
            :style="{ color: '#2c3e50', cursor: 'pointer' }"
            @click="openEditTask(task)"
            title="Edit task"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters["getDoneTasks"];
    },
  },
  methods: {
    // drop tasks method
    dropTask: function (taskStatus) {
      // get moved task
      const movedTask = this.$store.getters["getMovedTask"];
      //  Done tasks is accepts from Both Todo & In progress
      // edit moved task status
      movedTask.status = taskStatus;
      // storing updated task status at local storage
      this.$store.dispatch("setLocalStorage");
    },
    // delete tasks
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>

<style></style>
