import {Player} from './Player'
const player1 = Player('tom', 'x');
const player2 = Player('oreo', 'o');

import displayController from "./displayController";
let {isXNext} = displayController(player2);

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
  element.setAttribute('id', "#gameBoardModulev")
  element.innerHTML = template;
  return element;
}

function initBoard() {
  const element = createBoard();
  
  document.body.appendChild(element);

  //  Cache  DOM//  Cache  DOM
  const gameBoard = element.querySelector('#board');
  const lis = gameBoard.querySelectorAll('li');

  // Bind Events 
  element.addEventListener('click', (e) => { markBoard(e,lis)})


  // Render
  render(lis);
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
function markBoard(e,lis) {
  // console.log(e.target);
  if (e.target.tagName == "LI" && e.target.textContent == ' ') {
    const mark = isXNext ? 'x' : 'o'
    const index = e.target.getAttribute('data-index');
    board[index] = mark;
    render(lis);
    // if (checkWinner) {
    //   alert(`the winner is ${mark}`)
    // }
    console.log(checkWinner())
    isXNext = !isXNext;
  }
}

function render(lis) {
  board.map((ele,index)=>lis[index].textContent=board[index])
}

export default function () {
  return initBoard();
}
   
