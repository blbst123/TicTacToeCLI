// TODO: TOGGLE DISPLAYING NUMBERS
module.exports = class TicTacToeBoard {
  constructor() {
    this.boardStr = '   |   |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ';
    this.boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.player = 'X';
    this.placed = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };
    this.counter = 0;

    this.switchPlayer = this.switchPlayer.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.playPiece = this.playPiece.bind(this);

    console.log('Welcome to TicTacToe CLI game!');
    console.log('CTRL C to exit; B to Toggle board view\n');
    console.log('This is a visual representation of the TicTacToe board with numbers representing locations:\n');
    console.log(' 1 | 2 | 3 \n---+---+---\n 4 | 5 | 6 \n---+---+---\n 7 | 8 | 9 \n');
    console.log('Players will take turns placing pieces onto the board by typing the number located at that spot.');
    console.log('Players X, start!\n');
  }

  switchPlayer() {
    if (this.player === 'X') this.player = 'O';
    else this.player = 'X';
  }

  checkWin() {
    let status = 'none';
    // check rows
    for (let i = 0; i < this.boardArr.length; i++) {
      if (this.boardArr[i][0] === this.player && this.boardArr[i][1] === this.player && this.boardArr[i][2] === this.player) status = 'win';
    }
    // check columns
    for (let j = 0; j < this.boardArr.length; j++) {
      if (this.boardArr[0][j] === this.player && this.boardArr[1][j] === this.player && this.boardArr[2][j] === this.player) status = 'win';
    }

    // check diagonals
    if (this.boardArr[0][0] === this.player && this.boardArr[1][1] === this.player && this.boardArr[2][2] === this.player) status = 'win';
    if (this.boardArr[0][2] === this.player && this.boardArr[1][1] === this.player && this.boardArr[2][0] === this.player) status = 'win';

    if (status === 'win') {
      console.log(`Player ${this.player} wins! Restart to play again.`);
      return true;
    } 
    if (this.counter === 9) {
      console.log('Game has drawn! Restart to play again.');
      return true;
    }

    this.switchPlayer();
    return false;
  }

  playPiece(str) {
    if (this.placed[str]) {
      console.log('That location is taken!\n');
      return false;
    }

    switch (str) {
      case '1':
        this.boardStr = this.boardStr.slice(0, 1) + this.player + this.boardStr.slice(2);
        this.boardArr[0][0] = this.player;
        break;

      case '2':
        this.boardStr = this.boardStr.slice(0, 5) + this.player + this.boardStr.slice(6);
        this.boardArr[0][1] = this.player;
        break;

      case '3':
        this.boardStr = this.boardStr.slice(0, 9) + this.player + this.boardStr.slice(10);
        this.boardArr[0][2] = this.player;
        break;

      case '4':
        this.boardStr = this.boardStr.slice(0, 25) + this.player + this.boardStr.slice(26);
        this.boardArr[1][0] = this.player;
        break;

      case '5':
        this.boardStr = this.boardStr.slice(0, 29) + this.player + this.boardStr.slice(30);
        this.boardArr[1][1] = this.player;
        break;

      case '6':
        this.boardStr = this.boardStr.slice(0, 33) + this.player + this.boardStr.slice(34);
        this.boardArr[1][2] = this.player;
        break;

      case '7':
        this.boardStr = this.boardStr.slice(0, 49) + this.player + this.boardStr.slice(50);
        this.boardArr[2][0] = this.player;
        break;

      case '8':
        this.boardStr = this.boardStr.slice(0, 53) + this.player + this.boardStr.slice(54);
        this.boardArr[2][1] = this.player;
        break;

      case '9':
        this.boardStr = this.boardStr.slice(0, 57) + this.player + this.boardStr.slice(58);
        this.boardArr[2][2] = this.player;
        break;

      default:
        console.log("That's not a valid location!\n");
        return false;
    }

    this.placed[str] = true;
    this.counter++;
    console.log(`Player ${this.player} has played a piece in position ${str}.\n`);
    console.log(this.boardStr + '\n');
    return true;
  }
}
