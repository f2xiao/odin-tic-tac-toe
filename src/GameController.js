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

	let activePlayer = players[0]

	let board = GameBoard();
	
	const getActivePlayer = () => activePlayer;

	const switchActivePlayer = () => {
		activePlayer = activePlayer == players[0] ? players[1] : players[0];
	}
	
	const printNewBoard = () => { 
		// print it
		board.printBoard();
	 }
	const playerRound = (row, col)=>{
		// get the active player

		const player = getActivePlayer();

		// mark the board
		board.markBoard(row, col, player);

		// print the new board
		printNewBoard();

		// check if game is over

		// switch player
		switchActivePlayer();
	}
	

	return {getActivePlayer, playerRound}
}
