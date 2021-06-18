// lightsout
import { reactive, computed, toRefs } from 'vue'
import { BOARD_SIZES } from '../consts'

type Cell = { status: boolean, id: number }
type Row = [] | Cell[]
type Board = [] | Row[]
type State = {
  board: Board,
  size: number,
  steps: number
}

const isCleared = (board: Board): boolean => board.flat().every((cell: Cell) => cell.status === true)

export function useLightsOut () {
  const state: State = reactive({
    board: [],
    size: BOARD_SIZES[0].value,
    steps: 0
  })

  const allChecked = computed(() => isCleared(state.board))

  let id = 0
  
  const createRow = (): Row => {
    const row = []

    for (let i = 0; i < state.size; i++) {
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
    
    for (let i = 0; i < state.size; i++) {
      board.push(createRow())
    }

    return board
  }

  const init = () => {
    let board = createBoard()

    // クリア条件を満たしたら再試行する
    // TODO: 2連続以上で満たした場合をカバーする
    if (isCleared(board)) {
      board = createBoard()
    }

    state.board = board
    state.steps = 0
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

    state.steps++
  }

  const updateSize = (size: number) => {
    state.size = size
    init()
  }

  return {
    ...toRefs(state),
    allChecked,
    init,
    update,
    updateSize
  }
}



