<template>
  <div class="header">
    <h1>LIGHTS OUT</h1>
    <div>
      <button>あそびかた</button>
      <button @click="reset">さいしょから</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    reset: {
      type: Function,
      default: () => {}
    }
  },
  setup: props => {
    return {
      ...props
    }
  }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: var(--white);
}

h1 {
  font-size: 1.5rem;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}
</style>