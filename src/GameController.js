import GameBoard from "./GameBoard"
export default function (player1 = {
	name: "O",
	mark: "o"
}, player2 ={
	name: "X",
	mark: "x"
}) {

	const players = [
		player1,
		player2,
	];
	// Player O starts first
	let activePlayer = players[0]
	// initiate the board obj
	let board = GameBoard();
	
	const getActivePlayer = () => activePlayer;

	const switchActivePlayer = () => {
		activePlayer = activePlayer == players[0] ? players[1] : players[0];
	}
	
	const printNewBoard = () => { 
		// print the new board to the console
		board.printBoard();
	}

	const lineOfMark = (arrs, mark) => {
		return arrs.some((arr) => arr.every((ele) => ele.getValue() == mark.getValue()))
	}


	const gameOver = (row, col) => { 
		// check if there is 3-in-row or 3-in-col or 3-in-diag
		const newBoard = board.getBoard();
		const mark = newBoard[row][col];
		// console.log(mark.getValue());
		// these four arrays represent the 4 lines on the board
		// if the mark entry is on any of the lines
		// check if the values on that line is all equal to the mark
		const rowArr = [...newBoard[row]];
		const colArr = [newBoard[0][col], newBoard[1][col], newBoard[2][col]];
		const diag1Arr = [newBoard[0][0], newBoard[1][1], newBoard[2][2]];
		const diag2Arr = [newBoard[2][0], newBoard[1][1], newBoard[0][2]];
		const fourArrs = [rowArr, colArr, diag1Arr, diag2Arr];
		// check if mark is on any of the four lines, if yes, push it to check that line
		const lines = [];
		fourArrs.forEach((arr) => { 
			if (arr.includes(mark)) {
				lines.push(arr);
			}
		 })
		
		return {
			over: lineOfMark(lines, mark),
			winnerMark: mark.getValue(),
		}
	 }
	
	const playerRound = (row, col)=>{
		// get the active player
		const player = getActivePlayer();

		// mark the board
		board.markBoard(row, col, player);

		// print the new board
		printNewBoard();

		// check if game is over
		const isGameOver = gameOver(row, col);
		if (isGameOver.over) {
			console.log(`game is over, winner is player ${isGameOver.winnerMark}`)
		}

		// switch player
		switchActivePlayer();
	}
	

	return {getActivePlayer, playerRound}
}
