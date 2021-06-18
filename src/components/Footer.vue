<template>
  <div class="footer">
    <template
      v-for="(item, i) in BOARD_SIZES"
    >
      <button
        class="button"
        :key="item.name"
        v-if="size === BOARD_SIZES[i].value" 
        @click="() => click(
          BOARD_SIZES[i + 1]
            ? BOARD_SIZES[i + 1].value 
            : BOARD_SIZES[0].value
        )
      ">
        {{ item.name }} <IconArrow />
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconArrow from './IconArrow.vue'

import { BOARD_SIZES } from '../consts'

export default defineComponent({
  components: {
    IconArrow
  },

  props: {
    size: {
      type: Number,
      default: 0
    },

    click: {
      type: Function,
      default: () => {}
    }
  },
  
  setup() {
    return {
      BOARD_SIZES
    }
  }
})
</script>

<style scoped>
.footer {
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
</style>