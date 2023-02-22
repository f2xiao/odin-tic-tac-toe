import GameController from "./GameController";

export default function () {
  const game = GameController();

  // get the reference of the dom
  const container = document.querySelector('#container');
  const playerTurnDiv = container.querySelector('#player');
  const boardDiv = container.querySelector('#board');
  
  // define the funtcion to update the screen

  const updateScreen = () => { 
     // clear the board
     boardDiv.textContent = '';

     // get the current board
    const board = game.getBoard();
    // get the active player
    const activePlayer = game.getActivePlayer();
    playerTurnDiv.textContent = `${activePlayer.name}'s turn`
    // render the value to the current board dom
    // render the board in the dom
    board.forEach((row, index) => { 
      const ul = document.createElement('ul');
      ul.dataset.row = index;
      row.forEach((cell, index) => { 
        const li = document.createElement('li');
        li.dataset.column = index;
        li.textContent = cell.getValue();
        ul.appendChild(li);
      })
      boardDiv.appendChild(ul);
    })
    
  }


  
  // define the click event handler
  const clickHandlerBoard = (e) => {
    const selectedCellColumn = e.target.dataset.column;
    console.log(e.target.parentElement)
    const selectedCellRow = e.target.parentElement.dataset.row;
    // make sure a cell is clicked
    if (!selectedCellColumn || !selectedCellRow) return;
    // plyerRound
    const isGameOver = game.playerRound(selectedCellRow, selectedCellColumn);

    console.log(isGameOver);
    //update the screen
    updateScreen();
    // check if game is over
    if (isGameOver?.over) {
      // remove click event handler
      boardDiv.removeEventListener("click", clickHandlerBoard);
      // show who is the winner
      playerTurnDiv.textContent = `game is over, winner is player ${isGameOver.winnerMark}`;
      return
    }
  }

  // attach the event handler to the element 
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();
}