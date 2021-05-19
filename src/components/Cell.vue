<template>
	<div
		class="cell"
		:class="className"
		:style="
			`width: calc(100% / ${size}); height: 100%);`
		"
		@click="click"
	></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

type Props = {
	isActive: boolean,
	size: number
}

export default defineComponent({
	props: {
		click: {
			type: Function,
			default: () => {}
		},
		isActive: {
			type: Boolean,
			default: false
		}, 
		size: {
			type: Number,
			default: 8
		}
	},

	setup: (props: Props) => {
		const className = computed(() => props.isActive ? 'is-active' : '')
		return {
			className,
			size: props.size
		}
	}
})
</script>

<style scoped>
.cell {
	position: relative;
	background: #eee;
	border: 3px solid #fff;
	border-radius: 4px;
	transition-duration: 0.2s;
}

.is-active {
	background: #333;
}
</style>