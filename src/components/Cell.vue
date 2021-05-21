<template>
  <button
    class="cell"
    :class="`${status} ${allChecked}`"
    :style="`width: calc(100% / ${size}); height: 100%);`"
    @click="click"
  ></button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

type Props = {
  status  : boolean,
  allChecked: boolean,
  size: number
}

export default defineComponent({
  props: {
    click: {
      type: Function,
      default: () => {}
    },
    status  : {
      type: Boolean,
      default: false
    },
    allChecked: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 8
    }
  },

  setup: (props: Props) => {
    const status = computed(() => props.status ? 'truthy' : '')
    const allChecked = computed(() => props.allChecked ? 'all-checked' : '')

    return {
      status,
      allChecked,
      size: props.size
    }
  }
})
</script>

<style scoped>
.cell {
  position: relative;
  background: var(--blue); 
  border-radius: var(--radius);
  margin: 4px;
  transition-timing-function: ease-out;
  transition-duration: 0.1s;
}

.truthy {
  background: var(--orange);
}

.truthy:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0));
}
</style>