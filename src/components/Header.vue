<template>
  <div class="header">
    <div class="inner">
      <h1>
        <Icon />
        <span class="title">{{ TITLE }}</span>
      </h1>

      <div>
        <button @click="showModal">あそびかた</button>
        <button @click="reset">さいしょから</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TITLE } from '../consts'

import Icon from './Icon.vue';

export default defineComponent({
  name: 'Header',
  
  components: {
    Icon
  },

  props: {
    showModal: {
      type: Function as PropType<() => void>,
      default: () => {}
    },
    
    reset: {
      type: Function as PropType<() => void>,
      default: () => {}
    }
  },

  setup: () => {
    return {
      TITLE
    }
  }
})
</script>

<style scoped>
.header {
  padding: 0.5rem;
  background: var(--white);
}

.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--width);
  margin: auto;
}

h1 {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}

.title {
  margin-left: 10px;
}
</style>