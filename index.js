const readline = require('readline');

console.log('Welcome to TicTacToe CLI game!');
console.log('CTRL C to exit; B to Toggle board view\n');
console.log('This is a visual representation of the TicTacToe board with numbers representing locations:\n');
console.log(' 1 | 2 | 3 \n---+---+---\n 4 | 5 | 6 \n---+---+---\n 7 | 8 | 9 \n');
console.log('Players will take turns placing pieces onto the board by typing the number located at that spot.');
console.log('Players X, start!\n');

let boardStr = '   |   |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ';
let boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 'X';
let placed = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };
let counter = 0;

// TODO: TOGGLE DISPLAYING NUMBERS

const switchPlayer = function () {
  if (player === 'X') return player = 'O';
  player = 'X';
}

const checkWin = function () {
  // check rows
  for (let i = 0; i < boardArr.length; i++) {
    if (boardArr[i][0] === player && boardArr[i][1] === player && boardArr[i][2] === player) return true;
  }
  // check columns
  for (let j = 0; j < boardArr.length; j++) {
    if (boardArr[0][j] === player && boardArr[1][j] === player && boardArr[2][j] === player) return true;
  }

  // check diagonals
  if (boardArr[0][0] === player && boardArr[1][1] === player && boardArr[2][2] === player) return true;
  if (boardArr[0][2] === player && boardArr[1][1] === player && boardArr[2][0] === player) return true;

  return false;
}

const playPiece = function (str) {
  if (placed[str]) {
    console.log('That location is taken!\n');
    return false;
  }

  switch (str) {
    case '1':
      boardStr = boardStr.slice(0, 1) + player + boardStr.slice(2);
      boardArr[0][0] = player;
      return true;

    case '2':
      boardStr = boardStr.slice(0, 5) + player + boardStr.slice(6);
      boardArr[0][1] = player;
      return true;

    case '3':
      boardStr = boardStr.slice(0, 9) + player + boardStr.slice(10);
      boardArr[0][2] = player;
      return true;

    case '4':
      boardStr = boardStr.slice(0, 25) + player + boardStr.slice(26);
      boardArr[1][0] = player;
      return true;

    case '5':
      boardStr = boardStr.slice(0, 29) + player + boardStr.slice(30);
      boardArr[1][1] = player;
      return true;

    case '6':
      boardStr = boardStr.slice(0, 33) + player + boardStr.slice(34);
      boardArr[1][2] = player;
      return true;

    case '7':
      boardStr = boardStr.slice(0, 49) + player + boardStr.slice(50);
      boardArr[2][0] = player;
      return true;

    case '8':
      boardStr = boardStr.slice(0, 53) + player + boardStr.slice(54);
      boardArr[2][1] = player;
      return true;

    case '9':
      boardStr = boardStr.slice(0, 57) + player + boardStr.slice(58);
      boardArr[2][2] = player;
      return true;

    default:
      console.log("That's not a valid location!\n");
      return false;
  }
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (playPiece(str)) {
      placed[str] = true;
      console.log(`Player ${player} has played a piece in position ${str}.\n`);
      console.log(boardStr);
      console.log();
      counter++;
      if (checkWin()) {
        console.log(`Player ${player} wins! Restart to play again.`);
        process.exit();
      } else if (counter === 9) {
        console.log('Game has drawn! Restart to play again.')
        process.exit();
      } else {
        switchPlayer();
        console.log(`It is now Player ${player}'s turn!`);
      }
    } else {
      console.log("That's not a valid location!\n");
    }
  }
});

