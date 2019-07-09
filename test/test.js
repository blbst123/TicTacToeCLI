const assert = require('assert');
const ticTacToeClass = require('../tictactoe');

describe('TicTacToe game', function () {
  describe('board initialization', function () {
    const ticTacToe = new ticTacToeClass();

    it('should create a board string', function () {
      assert.strictEqual('   |   |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ', ticTacToe.boardStr);
    });

    it('should create a 3x3 board array of 0s', function () {
      const boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      assert.deepEqual(boardArr, ticTacToe.boardArr);
    });
  });

  describe('playing pieces', function () {
    const ticTacToe = new ticTacToeClass();

    it('should update board with "X" after playing first piece', function () {
      ticTacToe.playPiece('1');
      assert.strictEqual(' X |   |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ', ticTacToe.boardStr);
      assert.deepEqual([['X', 0, 0], [0, 0, 0], [0, 0, 0]], ticTacToe.boardArr);
    });

    it('should update board with "O" after playing second piece', function () {
      ticTacToe.playPiece('2');
      assert.strictEqual(' X | O |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ', ticTacToe.boardStr);
      assert.deepEqual([['X', 'O', 0], [0, 0, 0], [0, 0, 0]], ticTacToe.boardArr);
    });

    it('should not update board if playing piece on location already taken', function () {
      ticTacToe.playPiece('2');
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('2');
      assert.strictEqual(' X | O |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ', ticTacToe.boardStr);
      assert.deepEqual([['X', 'O', 0], [0, 0, 0], [0, 0, 0]], ticTacToe.boardArr);
    });

    it('should not update board if playing non-valid keys', function () {
      ticTacToe.playPiece('x');
      ticTacToe.playPiece('!');
      assert.strictEqual(' X | O |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ', ticTacToe.boardStr);
      assert.deepEqual([['X', 'O', 0], [0, 0, 0], [0, 0, 0]], ticTacToe.boardArr);
    });
  });

  describe('switching players automatically', function () {
    const ticTacToe = new ticTacToeClass();

    it('should start with player X', function () {
      assert.strictEqual('X', ticTacToe.player);
    });

    it('should change to player O after playing a piece', function () {
      ticTacToe.playPiece('2');
      assert.strictEqual('O', ticTacToe.player);
    });

    it('should change to player X after playing another piece', function () {
      ticTacToe.playPiece('1');
      assert.strictEqual('X', ticTacToe.player);
    });

    it('should not change players if playing piece on a location already taken', function () {
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('2');
      assert.strictEqual('X', ticTacToe.player);
    });
  });

  describe('winning a game', function () {
    it('in row 1 for player X', function () {
      const ticTacToe = new ticTacToeClass();
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('4');
      ticTacToe.playPiece('2');
      ticTacToe.playPiece('5');
      ticTacToe.playPiece('3');
      assert.strictEqual('X', ticTacToe.player);
      assert.equal(true, ticTacToe.checkWin());
    });

    it('in row 2 for player O', function () {
      const ticTacToe = new ticTacToeClass();
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('4');
      ticTacToe.playPiece('2');
      ticTacToe.playPiece('5');
      ticTacToe.playPiece('9');
      ticTacToe.playPiece('6');
      assert.strictEqual('O', ticTacToe.player);
      assert.equal(true, ticTacToe.checkWin());
    });

    it('in column for player X', function () {
      const ticTacToe = new ticTacToeClass();
      ticTacToe.playPiece('2');
      ticTacToe.playPiece('4');
      ticTacToe.playPiece('5');
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('8');
      assert.strictEqual('X', ticTacToe.player);
      assert.equal(true, ticTacToe.checkWin());
    });

    it('in column for player O', function () {
      const ticTacToe = new ticTacToeClass();
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('3');
      ticTacToe.playPiece('5');
      ticTacToe.playPiece('6');
      ticTacToe.playPiece('8');
      ticTacToe.playPiece('9');
      assert.strictEqual('O', ticTacToe.player);
      assert.equal(true, ticTacToe.checkWin());
    });
  });

  describe('drawing a game', function () {
    it('having count === 9', function () {
      const ticTacToe = new ticTacToeClass();
      ticTacToe.playPiece('1');
      ticTacToe.playPiece('4');
      ticTacToe.playPiece('2');
      ticTacToe.playPiece('5');
      ticTacToe.playPiece('6');
      ticTacToe.playPiece('9');
      ticTacToe.playPiece('8');
      ticTacToe.playPiece('3');
      ticTacToe.playPiece('7');
      assert.equal(9, ticTacToe.counter);
    });
  });
});