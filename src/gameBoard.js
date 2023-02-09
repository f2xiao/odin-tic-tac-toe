import {Player} from './Player'
import displayController from "./displayController";

const player1 = Player('tom', 'x');
const player2 = Player('oreo', 'o');
let { isXNext, checkTie, checkWinner, isGameOver } = displayController(player1);

let template = `<h1>Tic Tac Toe</h1>
<p>Player X is the next</p>
<div id="board">
  <ul class="row">
    <li data-index="0"></li>
    <li data-index="1"></li>
    <li data-index="2"></li>
  </ul>
  <ul class="row">
    <li data-index="3"></li>
    <li data-index="4"></li>
    <li data-index="5"></li>
  </ul>
  <ul class="row">
    <li data-index="6"></li>
    <li data-index="7"></li>
    <li data-index="8"></li>
  </ul>
</div>`;


let board = Array(9).fill(' ');

function createBoard() {
  const element = document.createElement('div');
  element.setAttribute('id', "gameBoardModule")
  element.innerHTML = template;
  return element;
}

const element = createBoard();
  
document.body.appendChild(element);
//  Cache  DOM//  Cache  DOM
const gameBoard = element.querySelector('#board');
const lis = gameBoard.querySelectorAll('li');

function initBoard() {
  // Bind Events 
  element.addEventListener('click', markBoard);
  // Render
  render();
}

function markBoard(e) {
  // console.log(e.target);
  if (e.target.tagName == "LI" && e.target.textContent == ' ') {
    const mark = isXNext ? 'x' : 'o'
    const index = e.target.getAttribute('data-index');
    board[index] = mark;
    render();
    // check if the game is over: either a winner or a tie
    const gameResults = isGameOver(board);
    if (gameResults.gameIsOver) {
      element.removeEventListener('click', markBoard);
      const message = gameResults.tie ? `It's a tie` : `Player ${gameResults.winner.player} wins`;
      console.log(message);
      return;
    }
	  isXNext = !isXNext;
  }
}

function render() {
  board.map((ele,index)=>lis[index].textContent=board[index])
}

export default function () {
  return initBoard();
}
   
