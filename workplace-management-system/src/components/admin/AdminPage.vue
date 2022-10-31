<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminPage',
  data() {
    return {
      title: 'Admin Page',
    };
  },
});
</script>

<style scoped>

</style>
