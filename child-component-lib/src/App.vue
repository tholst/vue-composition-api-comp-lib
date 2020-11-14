<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {},
  setup(_, { root }) {
    console.log(root);
  }
});
</script>

<style lang="scss"></style>
