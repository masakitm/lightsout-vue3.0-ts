<template>
<div class="congrats">
  <div class="contents">
    <h2 class="mb1">ステージクリア！</h2>

    <template
      v-if="!isLastStage"
    >
      <p class="mb1">
        おめでとう！<br>
        次のステージにチャレンジしてみよう
      </p>

      <Icon
        :coloredCells="[1,2,3,4,5,6,7,8,9]"
      />
    </template>

    <template
      v-if="isLastStage"
    >
      パズルマスターです！おめでとう！
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
  width: 100%;
  padding: 3rem 0;
  background: rgba(255, 255, 255, 0.97)
}

@keyframes sizeScale {
  0% {
    width:0px;
    height: 0px;
  }

  1% {
    height: 2px;
    width: 0px;
  }

  50% {
    width: var(--modalWidth);
    height: 2px;
  }

  100% {
    height: var(--modalHeight);
  }
}
</style>