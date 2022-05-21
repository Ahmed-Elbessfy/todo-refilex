<template>
  <form @submit.prevent="addNewTask">
    <h2>Add New Task</h2>
    <!-- title  -->
    <label>
      <input type="text" v-model="title" class="title" />
    </label>

    <input type="submit" value="Add New Task" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    addNewTask() {
      // store new task data at the store
      this.$store.dispatch("addNewTask", {
        title: this.title,
        description: this.description,
      });
      // empty input fields
      this.title = "";
      this.description = "";
    },
  },
};
</script>

<style></style>
