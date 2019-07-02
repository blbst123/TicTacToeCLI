# TicTacToeCLI
2 player TicTacToe game played from the command line

## 💻 Setting up the game locally

This game is completely run and played on the command line. You need to have node and git installed on your computer.<br />
Clone this repo and and navigate into the directory:
  ```sh
    git clone https://github.com/blbst123/TicTacToeCLI.git
    cd TicTacToeCLI
  ```

Run the following command to start the game:
  ```sh
  node index.js
  ```

## 🚀 Instructions for playing the game

If you followed the correct steps to setup and start the game, you should see the follow message in your CLI:
  ```sh
    Welcome to TicTacToe CLI game!
    This is a visual representation of the TicTacToe board with numbers representing locations:
     1 | 2 | 3 
    ---+---+---
     4 | 5 | 6 
    ---+---+---
     7 | 8 | 9 
    
    Players will take turns placing pieces onto the board by typing the number located at that spot.
    Players X, start!
  ```
The numbers 1-9 on the game board represent the locations where pieces can be places. Taking turns, each player will type
the number to place a piece on that specified location.

The game is automatically exited when either player wins or a draw occurs.

To manually end the game, enter `ctrl c`. Game data will not be saved.