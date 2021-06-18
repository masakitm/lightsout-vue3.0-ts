<template>
  <button
    class="cell"
    :class="`${status} ${allChecked}`"
    :style="`width: calc(100% / ${size}); height: 100%);`"
    @click="click"
  ></button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type Props = {
  status: boolean,
  allChecked: boolean,
  size: number,
  click: () => void
}

export default defineComponent({
  props: {
    click: {
      type: Function as PropType<() => void>,
      default: () => {}
    },
    
    status : {
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

  setup: (props: Props): any => {
    const status = computed<"truthy" | "">(() => props.status ? 'truthy' : '')
    const allChecked = computed<"all-checked" | "">(() => props.allChecked ? 'all-checked' : '')

    return {
      status,
      allChecked,
      size: props.size,
      click: props.click
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
  box-shadow: 0 2px 4px rgb(67 133 187 / 7%);
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