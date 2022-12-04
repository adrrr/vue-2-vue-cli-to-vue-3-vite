<template>
  <div>
    <h3>Hello World</h3>
    {{counter}}
    <button @click="counter++">press me</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const counter = ref(0)

</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

</style>
