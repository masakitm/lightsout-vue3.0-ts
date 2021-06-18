<template>
  <div class="button_icon">▶</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconArrow'
})
</script>

<style scoped>
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
</style>