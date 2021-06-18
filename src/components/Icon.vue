<template>
  <div class="container">
    <div class="icon">
      <div
        v-for="item in ICON_CELLS"
        :key="`icon_cell-${item}`"
        class="cell"
        :class="coloredCells.includes(item) && 'colored'"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ICON_CELLS } from '../consts'

export default defineComponent({
  props: {
    coloredCells: {
      type: Array,
      default: [5,8,9]
    }
  },
  setup() {
    return {
      ICON_CELLS
    }
  }
})
</script>

<style scoped>
.container {
  display: inline-block;
}

.icon {
  display: grid;
  grid-template-columns: 10px 10px 10px;
}

.cell {
  width: 6px;
  height: 6px;
  margin: 2px;
  border-radius: var(--radius);
  background: var(--blue);
}

.colored {
  background: var(--orange);
}
</style>