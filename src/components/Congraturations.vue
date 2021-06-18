<template>
<div>
  おめでとう！

  <template
    v-if="!isLastStage"
  >
    次のステージもチャレンジ！
  </template>

  <template
    v-if="isLastStage"
  >
    あなたはパズルマスターです！
  </template>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
