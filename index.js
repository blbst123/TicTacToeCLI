const readline = require('readline');
const ticTacToe = require('./tictactoe');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (ticTacToe.playPiece(str)) {
      ticTacToe.placed[str] = true;
      console.log(`Player ${ticTacToe.player} has played a piece in position ${str}.\n`);
      console.log(ticTacToe.boardStr);
      console.log();
      ticTacToe.counter++;
      if (ticTacToe.checkWin()) {
        console.log(`Player ${ticTacToe.player} wins! Restart to play again.`);
        process.exit();
      } else if (ticTacToe.counter === 9) {
        console.log('Game has drawn! Restart to play again.')
        process.exit();
      } else {
        ticTacToe.switchPlayer();
        console.log(`It is now Player ${ticTacToe.player}'s turn!`);
      }
    } else {
      console.log("That's not a valid location!\n");
    }
  }
});

