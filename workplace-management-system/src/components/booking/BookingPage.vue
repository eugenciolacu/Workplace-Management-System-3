<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookingPage',
  data() {
    return {
      title: 'Booking Page',
    };
  },
});
</script>

<style scoped>

</style>
