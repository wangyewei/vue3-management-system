<template>
  <section class="sign-section section">
    <button @click="isCheack = !isCheack">btn</button>

    <div v-if="isCheack">{{ name }}</div>
  </section>
</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    name: "signin",
    setup() {
      const isCheack = ref < boolean > (false)
      const name = ref < string > ('06k4 studio')
      return {
        isCheack,
        name
      }
    }
  }
</script>

<style>

</style>