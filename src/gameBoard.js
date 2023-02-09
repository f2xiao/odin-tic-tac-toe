import {Player} from './Player'
import displayController from "./displayController";

const player1 = Player('tom', 'x');
const player2 = Player('oreo', 'o');
let { isXNext, checkTie, checkWinner, isGameOver } = displayController(player1);

let template = `<h1>Tic Tac Toe</h1>
<p id="message"></p>
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
const message = element.querySelector('#message');

function initBoard() {
  // Bind Events 
  element.addEventListener('click', markBoard);
  // Render
  render();
}

function getMark() {
  return isXNext ? 'x' : 'o';
}

function markBoard(e) {
  // console.log(e.target);
  if (e.target.tagName == "LI" && e.target.textContent == ' ') {
    const mark = getMark();
    const index = e.target.getAttribute('data-index');
    board[index] = mark;
    isXNext = !isXNext;
    render();
    // check if the game is over: either a winner or a tie
    const gameResults = isGameOver(board);
    if (gameResults.gameIsOver) {
      element.removeEventListener('click', markBoard);
      const text = gameResults.winner?.someoneWins ? `Player ${gameResults.winner.player} wins` : `It's a tie` ;
      message.textContent = text;
      return;
    }
  }
}

function render() {
  message.textContent = `Player ${getMark()}'s turn`;
  board.map((ele,index)=>lis[index].textContent=board[index])
}

export default function () {
  return initBoard();
}
   
