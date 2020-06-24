import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any; //9 moves on the gameboard
  xIsNext: boolean; //bool that helps to determine next player and which is using it currently
  winner: string; // winner which means either x or o

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  //-------newGame()----------//
  // newGame method is responsible for setting up initial values 
  // when starting a new game
  newGame(){
    this.squares = Array(9).fill(null); // -> initially 9 null values
    this.winner = null;
    this.xIsNext = true;
  }

  //---------get player()-------//
  // get player PROPERTY determines which player is currently using a gameboard
  // if  xIsNext true then next player is X, otherwise O
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  //----------makeMove----------//
  // Method makeMove() serves as event handler for when user clicks on one of the 
  // buttons to make a move
  // When click event happens, it checks the idx in the arr user clicked on;
  // if square, already clicked then nothing happens; but if it's empty or null
  // we splice the inx of the square user clicked on with the current player that we've
  // computed in this component
  // Also we toggle xIsNext to its opposite value
  makeMove(idx: number){
    if (!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  // algorythm calculateWinner() code comes from React tutorial
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
