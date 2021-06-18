<template>
<div class="congrats">
  <div class="contents">
    <h2 class="mb1">ステージクリア！</h2>

    <template
      v-if="!isLastStage"
    >
      <div>
        <p class="mb1">
          おめでとう！<br>
          次のステージにチャレンジしてみましょう<br>
        </p>
        <Icon
          :coloredCells="[1,2,3,4,5,6,7,8,9]"
        />
      </div>
    </template>

    <template
      v-if="isLastStage"
    >
      <div>
        <p class="mb1">パズルマスターです！おめでとう！</p>
        <Icon
          :coloredCells="[1,2,3,4,5,6,7,8,9]"
        />
      </div>
    </template>
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
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.contents {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.97);
  animation-name: sizeScale;
  animation-duration: 1s;
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

  50% {
    width: 100%;
    height: 2px;
  }

  100% {
    padding: 3rem 0;
    height: auto;
  }
}
</style>