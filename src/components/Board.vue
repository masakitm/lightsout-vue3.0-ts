<template>
  <div class="board">
    <div
      class="row"
      v-for="(row, yIndex) in board"
      :key="yIndex"
      :style="`height: calc(100% / ${SIZE})`"
    >
      <Cell
        v-for="(cell, xIndex) in row"
        :key="cell.id"
        :click="() => update(yIndex, xIndex)"
        :size="SIZE"
        :isActive="cell.status"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Cell from './Cell.vue'

import { useLightsOut } from '../hooks/useLightsOut'

const SIZE = 5

export default defineComponent({
  name: 'Board',
  
  components: {
    Cell
  },

  setup: () => {
    const { board, update, init } = useLightsOut(SIZE)

    onMounted(() => init())

    return {
      board,
      update,
      SIZE
    }
  }
})
</script>

<style scoped>
.board {
  width: 75vh;
  height: 75vh;
  margin: auto;
}

.row {
  display: flex;
  justify-content: center;
}
</style>
