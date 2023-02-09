function checkWinner(board) {
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
  const result = lines.map((line) => {
    const [a, b, c] = line;
    // console.log(a,b,c)
    if (board[a]!=' ' && board[a] == board[b] && board[b]== board[c]) {
      return true;
    }
  }, board)

  return result.some(ele=>ele==true);
}

function checkTie(board) {
  return board.every(ele => ele != ' ');
}

function isGameOver(board) {
  
}

export default function (player) {
  const isXNext = player.mark == 'x' ? true : false;
  return {
    isXNext,
    checkWinner,
    checkTie
  }
}