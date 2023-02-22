import Cell from "./Cell"
   
export default function(){
	const rows = 3;
	const cols = 3;
	// board is a 2D array, the outer array represents each row
	// board[0][1] represents row no.1 and col no.2
	// _ x _
	// _ _ _
	// _ _ _

	let board = [];
	// init the board
	for (let i = 0; i < rows; i++){
		board[i] = [];
		for (let j = 0; j < cols; j++){
			// each entry of the board is a Cell object
			board[i].push(Cell());
		}
	}
	// console.log(board);
	const getBoard = () => board;

	const markBoard = (row, col, player) => {
		let entry = board[row][col];
		// check if the entry is taken
		if (entry.getValue() == " ") {
			entry.addMark(player);
		} else {
			console.log("this place is taken")
		}
	}
	
	
	const printBoard = () => {
		// loop through the board and print out the values of each row
		board.forEach( (row, index) => {
			console.log(`row ${index}: ${row.reduce((acc, entry) => {
				// each entry of the board is a Cell object
				return acc + `${entry.getValue()} `;
			}, "")}`)
		})
	}
	return {getBoard, markBoard, printBoard}
}
