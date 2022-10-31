<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      title: 'Login Page',
    };
  },
});
</script>

<style scoped>

</style>
