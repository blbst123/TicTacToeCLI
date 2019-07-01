const readline = require('readline');

console.log('Welcome to TicTacToe CLI game.');
console.log('This is a visual representation of the TicTacToe board with numbers representing locations:');
console.log();
console.log('1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9');
console.log();
console.log('Players will take turns placing pieces onto the board by typing the number located at that spot.');

console.log('Players X, start!');

// console.log(board2);
// board2[2] = '5';
// board2 = board2.slice(0,2) + '5' + board2.slice(3);
// let board2 = '1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9';

let boardStr = ' | | \n-+-+-\n | | \n-+-+-\n | | ';
let boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 'X';
let placed = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };
let counter = 0;


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
    console.log('That location is taken!');
    return false;
  }

  switch (str) {
    case '1':
      boardStr = player + boardStr.slice(1);
      boardArr[0][0] = player;
      return true;

    case '2':
      boardStr = boardStr.slice(0, 2) + player + boardStr.slice(3);
      boardArr[0][1] = player;
      return true;

    case '3':
      boardStr = boardStr.slice(0, 4) + player + boardStr.slice(5);
      boardArr[0][2] = player;
      return true;

    case '4':
      boardStr = boardStr.slice(0, 12) + player + boardStr.slice(13);
      boardArr[1][0] = player;
      return true;

    case '5':
      boardStr = boardStr.slice(0, 14) + player + boardStr.slice(15);
      boardArr[1][1] = player;
      return true;

    case '6':
      boardStr = boardStr.slice(0, 16) + player + boardStr.slice(17);
      boardArr[1][2] = player;
      return true;

    case '7':
      boardStr = boardStr.slice(0, 24) + player + boardStr.slice(25);
      boardArr[2][0] = player;
      return true;

    case '8':
      boardStr = boardStr.slice(0, 26) + player + boardStr.slice(27);
      boardArr[2][1] = player;
      return true;

    case '9':
      boardStr = boardStr.slice(0, 28) + player + boardStr.slice(29);
      boardArr[2][2] = player;
      return true;

    default:
      console.log("That's not a valid location!");
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
      console.log(`Player ${player} has played a piece in position ${str}.`);
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
      console.log('Please play a valid location.');
      console.log();
    }
  }
});

