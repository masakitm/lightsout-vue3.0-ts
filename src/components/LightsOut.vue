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

  <div class="buttons">
    <template
      v-for="(item, i) in BOARD_SIZES"
    >
      <button
        class="button"
        :key="item.name"
        v-if="size === BOARD_SIZES[i].value" 
        @click="() => updateSize(
          BOARD_SIZES[i + 1]
            ? BOARD_SIZES[i + 1].value 
            : BOARD_SIZES[0].value
        )
      ">
        {{ item.name }} <IconArrow />
      </button>
    </template>
  </div>

  <Modal
    :show="showModal"
    :click="toggleModal"
  />

  <Congrats
    v-if="allChecked"
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
import IconArrow from './IconArrow.vue'

import { BOARD_SIZES } from '../consts'

export default defineComponent({
  name: 'LightsOut',
  
  components: {
    Header,
    Cell,
    Modal,
    Congrats,
    IconArrow
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
  background: var(--white);
}

.button {
  position: relative;
}

.button {
  font-size: 1.2rem;
}

.steps {
  margin-top: 1rem;
}

.count {
  font-weight: 700;
}
</style>
