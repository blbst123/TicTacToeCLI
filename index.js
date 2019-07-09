const readline = require('readline');
const ticTacToeClass = require('./tictactoe');
const ticTacToe = new ticTacToeClass();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (ticTacToe.playPiece(str)) {
      process.exit();
    }
  }
});
