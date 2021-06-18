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
        :status="cell.status"
      />
    </div>
  </div>

  <div class="steps">
    おした数: <span class="count">{{ steps }}</span>
  </div>

  <Modal
    :show="showModal"
    :click="toggleModal"
  />

  <Congrats
    v-if="allChecked"
  />

  <Footer 
    :size="size"
    :click="updateSize"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useLightsOut } from '../hooks/useLightsOut'
import { useModal } from '../hooks/useModal'

import Cell from './Cell.vue'
import Header from './Header.vue'
import Modal from './Modal.vue'
import Congrats from './Congrats.vue'
import Footer from './Footer.vue'

export default defineComponent({
  name: 'LightsOut',
  
  components: {
    Header,
    Cell,
    Modal,
    Congrats,
    Footer
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

.steps {
  margin-top: 1rem;
}

.count {
  font-weight: 700;
}
</style>
