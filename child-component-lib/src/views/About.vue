<template>
  <div class="about">
    <h1>This is an about page (as component lib)</h1>
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
