<template>
  <Board />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from './components/Board.vue'

export default defineComponent({
  name: 'App',
  components: {
    Board
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
</style>
