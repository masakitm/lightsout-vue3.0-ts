<template>
  <div class="contents">
    <div class="congrats">
      <h2 class="mb1">ステージクリア！</h2>

      <div
        v-if="!isLastStage"
      >
        <p class="mb1">
          おめでとう！<br>
          次のステージにチャレンジしてみましょう<br>
        </p>
        <Icon
          :coloredCells="[1,2,3,4,5,6,7,8,9]"
        />
      </div>

      <div
        v-if="isLastStage"
      >
        <p class="mb1">パズルマスターです！おめでとう！</p>
        <Icon
          :coloredCells="[1,2,3,4,5,6,7,8,9]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  name: 'Congrats',

  components: {
    Icon
  },
  
  props: {
    isLastStage: {
      type: Boolean,
      default: false
    }
  },
  
  setup(props) {
    const { isLastStage } = props

    return {
      isLastStage
    }
  }
})
</script>

<style scoped>
.mb1 {
  margin-bottom: 1rem;
}

.congrats {
  opacity: 1;
  animation-name: fadeIn;
  animation-duration: 1.2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.contents {
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.97);
  animation-name: sizeScale;
  animation-duration: 1s;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 35vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes sizeScale {
  0% {
    width: 0px;
    height: 0px;
  }

  1% {
    height: 2px;
    width: 0px;
  }

  30% {
    width: 100%;
    height: 2px;
  }

  50% {
    height: 2px;
  }

  100% {
    padding: 3rem 0;
    height: 35vh;
  }
}
</style>