// lightsout
import { reactive, computed, toRefs } from 'vue'

type Cell = { status: boolean, id: number }

type Row = [] | Cell[]

type Board = [] | Row[]

type State = {
	board: Board
}

export function useLightsOut (size = 8) {
	const state: State = reactive({
		board: []
	})

	const isAllChecked = computed(() => state.board.flat().every((cell: Cell) => cell.status === true))
	
	let id = 0
	
	const createRow = (): Row => {
		const row = []

		for (let i = 0; i < size; i++) {
			row.push(
				{
					id,
					status: Math.random() >= 0.5
				}
			)
			id++
		}

		return row
	}

	const createBoard = (): Board => {
		const board = []
		
		for (let i = 0; i < size; i++) {
			board.push(createRow())
		}

		return board
	}

	const init = () => {
		state.board = createBoard()
	}

	const update = (yi: number, xi: number) => {
		state.board[yi][xi].status = !state.board[yi][xi].status
		
		if (state.board[yi - 1]) {
			state.board[yi - 1][xi].status = !state.board[yi - 1][xi].status
		}

		if (state.board[yi + 1]) {
			state.board[yi + 1][xi].status = !state.board[yi + 1][xi].status
		}

		if (state.board[yi][xi - 1]) {
			state.board[yi][xi - 1].status = !state.board[yi][xi - 1].status
		}

		if (state.board[yi][xi + 1]) {
			state.board[yi][xi + 1].status = !state.board[yi][xi + 1].status
		}
	}

	return {
		...toRefs(state),
		init,
		update,
		isAllChecked
	}
}



