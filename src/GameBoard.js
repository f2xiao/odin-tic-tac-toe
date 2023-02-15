import Cell from "./Cell"
   
export default function(){
	const rows = 3;
	const cols = 3;
	let board = [];

	for (let i = 0; i < rows; i++){
		board[i] = [];
		for (let j = 0; j < cols; j++){
			board[i].push(Cell());
		}
	}
	// console.log(board);
	const getBoard = () => board;

	const markBoard = (row, col, player) => {
		board[row][col].addMark(player);
	}

	
	const printBoard = () => {
		// loop through the board and print out the values
		board.forEach( (row, index) => {
			console.log(`row ${index}: ${row.reduce((acc, entry) => {
				// console.log(entry,acc);
				return acc + `${entry.getValue()} `;
			}, "")}`)
		})
	}
	return {getBoard, markBoard, printBoard}
}
