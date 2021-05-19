<template>
  <Header 
    :reset="init"
  />

  <div class="board">
    <div
      class="row"
      v-for="(row, yIndex) in board"
      :key="yIndex"
      :style="`height: calc(100% / ${size})`"
    >
      <Cell
        v-for="(cell, xIndex) in row"
        :key="cell.id"
        :click="() => update(yIndex, xIndex)"
        :size="size"
        :isActive="cell.status"
      />
    </div>
  </div>

  <div>
    Board Size: 
    <input 
      type="number"
      :value="size"
      @input="e => updateSize(e.target.value)"
    >

    <button @click="init">reset</button>
  </div>

  <div class="modal">
    <h2>あそびかた</h2>
    <p>
      ボタンをおすと、上下中左右5つのボタンの色が反転します<br>
      全部の色を白くできたらクリア！
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useLightsOut } from '../hooks/useLightsOut'

import Cell from './Cell.vue'
import Header from './Header.vue'

export default defineComponent({
  name: 'LightsOut',
  
  components: {
    Header,
    Cell
  },

  setup: () => {
    const { board, size, update, init, allChecked, updateSize } = useLightsOut()

    onMounted(() => init())

    return {
      board,
      size,
      update,
      updateSize,
      init,
      allChecked
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

.modal {
  display: none;
}
</style>
