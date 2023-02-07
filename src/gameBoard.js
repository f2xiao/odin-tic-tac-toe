let board = ['x','x','x','x','x','x','x','x','x'];

function component() {
  const element = document.createElement('div');
  element.setAttribute('id', "gameBoardModule");
  element.innerHTML = `<h1>Tic Tac Toe</h1>
  <ul id="board">
    <li data-index="0"></li>
    <li data-index="1"></li>
    <li data-index="2"></li>
    <li data-index="3"></li>
    <li data-index="4"></li>
    <li data-index="5"></li>
    <li data-index="6"></li>
    <li data-index="7"></li>
    <li data-index="9"></li>
  </ul>`
  return element;
}

document.body.appendChild(component());

function render() {
  board.map((ele,index)=>lis[index].textContent=board[index])
}

//  Cache  DOM
const element = document.querySelector('#gameBoardModule');
const gameBoard = element.querySelector('#board');
const lis = gameBoard.querySelectorAll('li');

// Bind Events


// Render

// render();


export default {
  render
}

