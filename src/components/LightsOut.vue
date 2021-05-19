<template>
  <Header 
    :reset="init"
    :showModal="toggleModal"
  />

  <div 
    class="board"
  >
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
        :status  ="cell.status"
      />
    </div>
  </div>

  <div class="steps">
    おした回数: {{ steps }}
  </div>

  <div class="buttons">
    <button class="button" v-if="size === 3" @click="() => updateSize(5)">かんたん</button>
    <button class="button" v-if="size === 5" @click="() => updateSize(8)">むずかしい</button>
    <button class="button" v-if="size === 8" @click="() => updateSize(3)">激ムズ</button>
  </div>

  <Modal
    :show="showModal"
    :click="toggleModal"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useLightsOut } from '../hooks/useLightsOut'
import { useModal } from '../hooks/useModal'

import Cell from './Cell.vue'
import Header from './Header.vue'
import Modal from './Modal.vue'

export default defineComponent({
  name: 'LightsOut',
  
  components: {
    Header,
    Cell,
    Modal
  },

  setup: () => {
    const { board, size, steps, update, init, allChecked, updateSize } = useLightsOut()
    const { showModal, toggleModal } = useModal()

    onMounted(() => init())

    return {
      board,
      size,
      steps,
      update,
      updateSize,
      init,
      allChecked,

      showModal, 
      toggleModal
    }
  }
})
</script>

<style scoped>
.board {
  width: var(--width);
  height: var(--width);
  margin: 3rem auto 0;
}

.row {
  display: flex;
  justify-content: center;
}

.buttons {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid var(--white);
}

.button {
  font-size: 1.2rem;
}

.steps {
  margin-top: 1rem;
}
</style>
