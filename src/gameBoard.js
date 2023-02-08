import {Player} from './Player'
import displayController from "./displayController";

const player1 = Player('tom', 'x');
const player2 = Player('oreo', 'o');
let { isXNext } = displayController(player2);

let template = `<h1>Tic Tac Toe</h1>
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

function checkWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const result = lines.map(line => {
    const [a, b, c] = line;
    // console.log(a,b,c)
    if (board[a]!=' ' && board[a] == board[b] && board[b]== board[c]) {
      return true;
    }
  })

  return result.some(ele=>ele==true);
}

function checkTie() {
  return board.every(ele => ele != ' ');
}
function markBoard(e) {
  // console.log(e.target);
  if (e.target.tagName == "LI" && e.target.textContent == ' ') {
    const mark = isXNext ? 'x' : 'o'
    const index = e.target.getAttribute('data-index');
    board[index] = mark;
    render(lis);
    // check if there is a winner if yes stop the game
	  // by remove the click handler from the board
    const tie = checkTie();
    const winner = checkWinner();
    if (tie || winner) {
      element.removeEventListener('click', markBoard);
    }
    if (tie) {
      console.log('there is a tie');
    }
    if (checkWinner()) {
	    console.log('there is a winner, game over');
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
   
