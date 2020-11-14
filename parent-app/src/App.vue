<template>
  <div id="app">
    <Home />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Home from "@/views/Home.vue";

export default defineComponent({
  components: {
    Home
  },
  setup(_, { root }) {
    console.log(root);
  }
});
</script>

<style lang="scss"></style>
