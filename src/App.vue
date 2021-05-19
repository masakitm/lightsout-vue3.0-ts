<template>
  <LightsOut />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LightsOut from './components/LightsOut.vue'

export default defineComponent({
  name: 'App',
  components: {
    LightsOut
  }
})
</script>

<style>
:root {
  /* --orange: #f66234; */
  --orange: rgba(246, 98, 52, 0.95);
  --lightorange: rgba(246, 98, 52, 0.5);
  --blue: #9198e5;
  --gray: #EDF2F7;
  --white: #FFF;
  --text: #2c3e50;
}

html, body {
  height: 100%;
  background: var(--gray); 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
