import { Component, OnInit, ViewChildren, ElementRef, QueryList, } from '@angular/core';



@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {
  @ViewChildren('greenAudio,blueAudio,redAudio,yellowAudio') audioElements: QueryList<ElementRef>;
  @ViewChildren('green,blue,red,yellow') elements: QueryList<ElementRef>;
  fields;
  gameState;
  message;
  constructor() {
    this.message = "";

    this.fields = {
      red: {
        element: null,
        audio: null
      },
      green: {
        element: null,
        audio: null
      },
      blue: {
        element: null,
        audio: null
      },
      yellow: {
        element: null,
        audio: null
      }
    }

    this.gameState = {
      difficulty: 10,
      round: 0,
      currentSequence: [],
      sequencePtr: 0,
      userTurn: false
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elements.forEach(el => this.fields[el.nativeElement.dataset.color].element = el.nativeElement);
    this.audioElements.forEach(el => this.fields[el.nativeElement.dataset.color].audio = el.nativeElement);
    console.debug(this.fields);
  }
  reset() {
    this.gameState.round = 0;
    this.gameState.currentSequence = [];
  }

  playSequence(idx) {
    if (idx < this.gameState.currentSequence.length) {
      this.blink(this.gameState.currentSequence[idx]).then(() => {
        let delay = 1000 / (((this.gameState.difficulty - 1) * 100) + 1)
        setTimeout(() => this.playSequence(idx + 1), delay);
      })
    }
  }

  startRound(reset) {
    if (reset) {
      this.reset();
    }
    this.message = "";
    this.generateSequence();
    this.playSequence(0);
    this.message = "Your turn";
    //odegranie nowej sekwencji
    this.gameState.userTurn = true;
    this.gameState.sequencePtr = 0;
    //compareSequecneToUserInput(this.gameState.currentSequence, this.gameState.playerSequence);
  }

  blink(field) {
    let aud = this.fields[field].audio;
    let elem = this.fields[field].element;

    elem.classList.add("blinked");
    let promise = new Promise((resolve) => {
      function handler() {
        aud.removeEventListener("ended", handler);
        resolve(true);
      }
      aud.addEventListener("ended", handler);
      aud.play();
    })
    promise.then(() => {
      this.fields[field].element.classList.remove("blinked");
    })
    return promise;
  }

  generateSequence() {
    console.log("Generowanie nowej sekwencji");
    const randomSound = Object.keys(this.fields)[Math.floor(Math.random() * Object.keys(this.fields).length)];
    console.log(randomSound);
    this.gameState.currentSequence.push(randomSound);
    console.log(this.gameState.currentSequence);
  }

  // displayGameState() {

  // }

  success() {
    this.message = "Success";
    this.gameState.userTurn = false;
    //this.displayGameState();
    this.gameState.round++;
    setTimeout(() => this.startRound(false), 3000);
    //startRound();
  }

  fail() {
    this.message = "You failed. Please press START button";
    console.log("fail");
    this.gameState.userTurn = false;
    // displayGameState();

  }

  playOnClick(field) {
    if (this.gameState.userTurn === true) {
      this.blink(field);
      if (this.gameState.currentSequence[this.gameState.sequencePtr] === field) {
        this.gameState.sequencePtr++;
        if (this.gameState.sequencePtr >= this.gameState.currentSequence.length) {
          this.success();
        }
      }
      else {
        this.fail();
      }
    }
  }
}
