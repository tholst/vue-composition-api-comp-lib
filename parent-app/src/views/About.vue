<template>
  <div class="about">
    <h1>This is an about page (as component lib)</h1>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export default defineComponent({
  components: {},
  setup(_, { root }) {
    const { useGetters, useActions } = createNamespacedHelpers("account");
    console.log(root);

    const { fetchInitialData } = useActions(["fetchInitialData"]);
  }
});
</script>
