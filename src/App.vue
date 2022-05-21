<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from "vue-router";

export default {
  created: function () {
    this.$store.dispatch("initiateStore");
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
