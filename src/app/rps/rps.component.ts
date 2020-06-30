// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-rps',
//   templateUrl: './rps.component.html',
//   styleUrls: ['./rps.component.scss']
// })
// export class RpsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss']
})
export class RpsComponent implements OnInit {
  rps = {
    rock: "ROCK",
    paper: "PAPER",
    scissors: "SCISSORS"
  }

  msgs = {
    win: "It's a win! 🔥",
    loss: "It's a loss! 💩",
    match: "It's a match! 😶"
  }

  scoreValue: number;
  result: String;
  computersPick: String;
  playersPick: String;

  constructor() { 
    this.scoreValue = 0;
    this.computersPick = "";
    this.result = "";
    this.playersPick = "";
  }

  ngOnInit(): void {

  }
  getRandomRPS():String {
    let keys = Object.keys(this.rps);
    let idx = Math.floor(Math.random() * keys.length);
    console.log(this.rps[keys[idx]]);
    return this.rps[keys[idx]];
  }

  getRandomRPS2():String {
    let values = Object.values(this.rps);
    let idx = Math.floor(Math.random() * values.length);
    console.log(values[idx]);
    return values[idx];
  }
  
  checkPlayerWin(playersPick: String, computersPick:String):boolean {
    return playersPick === this.rps.rock && computersPick === this.rps.scissors ||
      playersPick === this.rps.scissors && computersPick === this.rps.paper ||
      playersPick === this.rps.paper && computersPick === this.rps.rock;
  }
  
  turn(playersPickKey):void {
    this.playersPick = <String>this.rps[playersPickKey];
    this.computersPick = this.getRandomRPS2();

    if (this.playersPick === this.computersPick) {
      this.result = this.msgs.match;
    }
    else if (this.checkPlayerWin(this.playersPick, this.computersPick)) {
      this.scoreValue++;
      this.result = this.msgs.win;
    }
    else {
      this.scoreValue--;
      this.result = this.msgs.loss;
    }
  }
}
