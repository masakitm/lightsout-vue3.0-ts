<template>
  <button
    class="cell"
    :class="`${isActive} ${allChecked}`"
    :style="
      `width: calc(100% / ${size}); height: 100%);`
    "
    @click="click"
  ></button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

type Props = {
  isActive: boolean,
  allChecked: boolean,
  size: number
}

export default defineComponent({
  props: {
    click: {
      type: Function,
      default: () => {}
    },
    isActive: {
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
    const isActive = computed(() => props.isActive ? 'is-active' : '')
    const allChecked = computed(() => props.allChecked ? 'all-checked' : '')

    return {
      isActive,
      allChecked,
      size: props.size
    }
  }
})
</script>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}

.cell {
  position: relative;
  background: var(--blue); 
  border-radius: 6%;
  margin: 4px;
  transition-duration: 0.15s;
  cursor: pointer;
}

.is-active {
  background: var(--orange);
}

.is-active:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0));
}
</style>