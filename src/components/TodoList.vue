<template>
  <section>
    <h1>Todo Tasks</h1>
    <ul
      class="todo-tasks"
      @drop="dropTask('todo')"
      @dragenter.prevent
      @dragover.prevent
    >
      <!-- Tasks List  -->
      <li
        v-for="task in tasks"
        :key="task.id"
        @dragstart="startDrag($event, task)"
        draggable="true"
      >
        <div class="task-content">
          <p class="task-title">
            {{ task.title }}
          </p>
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
    <EditTask
      v-if="showEditTask"
      :editedTask="editedTask"
      @closeEditTaskForm="closeEditTaskForm"
    />
  </section>
</template>

<script>
import EditTask from "./EditTask.vue";
export default {
  data() {
    return {
      // edited task functionality data
      showEditTask: false,
      editedTask: {},
    };
  },
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
    // open edit task form
    openEditTask(task) {
      this.showEditTask = true;
      this.editedTask = task;
    },
    // close edit task form
    closeEditTaskForm() {
      this.showEditTask = false;
      this.editedTask = {};
    },
    // delete tasks
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
  components: { EditTask },
};
</script>

<style></style>
