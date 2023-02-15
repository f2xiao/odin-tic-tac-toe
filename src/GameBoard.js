import Cell from "./Cell"

export default function(){
	const rows = 3;
	const cols = 3;
	const board = []
	const getBoard = () => board;

	const markBoard = (row, col) => {
		board[row][col] = Cell;
	}

	
	const printBoard = () => {
		// loop through the board and print out the values
		board.forEach(row => {
			console.log(row.reduce((acc,entry)=>acc+` ${entry.value}`))
		}

	}


	return {getBoard, markBoard, printBoard}
}
