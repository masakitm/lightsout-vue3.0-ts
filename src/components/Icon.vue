<template>
	<div class="icon">
		<div
			v-for="item in 9"
			:key="`icon_cell-${item}`"
			class="cell"
			:class="coloredCells.includes(item) && 'colored'"
		></div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		coloredCells: {
			type: Array,
			default: [5,8,9]
		}
	}
})
</script>

<style scoped>
.icon {
  display: grid;
  grid-template-columns: 10px 10px 10px;
}

.cell {
	width: 6px;
	height: 6px;
	margin: 2px;
	border-radius: var(--radius);
  background: var(--blue);
}

.colored {
  background: var(--orange);
}
</style>