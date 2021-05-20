<template>
<div 
	class="modal"
	@click="click"
	:style="`display: ${show  ? 'block' : 'none'};`"
>
	<div class="inner">
		<div>
			<h2>あそびかた</h2>
			<p>
				ボタンをおしてみましょう。<br>
				おしたボタンと、上下左右4つの色が反転します。
			</p>

			<p class="figure">
				<Icon
					:coloredCells="[]"
				/>
				　→　
				<Icon
					:coloredCells="[2,4,5,6,8]"
				/>
			</p>
			
			<p>全部のボタンを<span>オレンジ</span>にするとクリアです！</p>
		</div>
	</div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
	props: {
		show: {
			type: Boolean,
			default: false
		},
		click: {
			type: Function,
			default: () => {}
		}
	},
	components: {
		Icon
	}
})
</script>

<style scoped>
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	align-items: center;
	justify-content: center;

	width: 55vh;
	height: 40vh;

	border-radius: 10px;
	background: rgba(255, 255, 255, 0.9);

	overflow: hidden;
	cursor: pointer;

	animation-name: sizeScale;
	animation-duration: 1s;
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

.inner {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	opacity: 1;
	animation-name: fadeIn;
	animation-duration: 1.2s;
	padding: 2rem;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	80% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

p {
	margin-top: 2rem;
}

span {
	color: var(--orange);
	font-weight: bold;
}

.figure {
	display: flex;
	justify-content: center;
}
</style>