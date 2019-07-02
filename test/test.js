const assert = require('assert');
const ticTacToeClass = require('../tictactoe');

describe('TicTacToe game', function () {
  describe('board initialization', function () {
    const ticTacToe = new ticTacToeClass();

    it('should create a board string', function () {
      assert.strictEqual(ticTacToe.boardStr, '   |   |   \n---+---+---\n   |   |   \n---+---+---\n   |   |   ');
    });

    it('should create a 3x3 board array of 0s', function () {
      const boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      assert.deepEqual(boardArr, ticTacToe.boardArr);
    });
  });
});