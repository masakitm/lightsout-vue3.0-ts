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
    おした回数: {{ steps }}
  </div>

  <div class="buttons">
    <button class="button" v-if="size === BOARD_SIZES[0]" @click="() => updateSize(BOARD_SIZES[1])">
      かんたん<div class="button_icon">▶</div>
    </button>
    
    <button class="button" v-if="size === BOARD_SIZES[1]" @click="() => updateSize(BOARD_SIZES[2])">
      むずかしい<div class="button_icon">▶</div>
    </button>
    
    <button class="button" v-if="size === BOARD_SIZES[2]" @click="() => updateSize(BOARD_SIZES[0])">
      オニ<div class="button_icon">▶</div>
    </button>
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

import { BOARD_SIZES } from '../consts'

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
      BOARD_SIZES,
      
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
  position: relative;
}

.button_icon {
  position: absolute;
  top: 50%;
  right: -1.2rem;
  font-size: 0.5rem;
  transform: translate(0%, -50%);
  animation-name: buttonIcon;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  opacity: 1;
}

@keyframes buttonIcon {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }

  50% {
    opacity: 1;
    transform: translate(0, -50%);
  }

  100% {
    opacity: 0;
    transform: translate(50%, -50%);
  }
}

.button {
  font-size: 1.2rem;
}

.steps {
  margin-top: 1rem;
}
</style>
