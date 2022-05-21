<template>
  <div class="overlay">
    <form @submit.prevent="editTask">
      <button class="close-button" @click="closeEditTaskForm">X</button>
      <h2>Edit Task</h2>
      <!-- title  -->
      <label for=""
        >Title:
        <input type="text" v-model="localEditedTask.title" class="title" />
      </label>
      <!-- description  -->
      <label
        >Description:
        <textarea v-model="localEditedTask.description" res></textarea>
      </label>

      <input type="submit" value="Save Changes" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    editedTask: Object,
  },
  data() {
    return {
      localEditedTask: {},
    };
  },
  created() {
    // set local title & description to editedTask from store
    this.localEditedTask = this.editedTask;
  },
  methods: {
    editTask() {
      // store new task data at the store
      this.$store.dispatch("setEditedTask", this.localEditedTask);
      // close form after editing
      // close edit task form by emitting closeEditTaskForm event to close form from parent component
      this.$emit("closeEditTaskForm");
    },
    closeEditTaskForm() {
      // close edit task form by emitting closeEditTaskForm event to close form from parent component
      this.$emit("closeEditTaskForm");
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
form {
  background: #fff;
  position: relative;
  border-radius: 1rem;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  z-index: 2;
  cursor: pointer;
}
</style>
