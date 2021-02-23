import { Component, OnInit, Input } from '@angular/core';
import { RandomUserService } from 'src/app/shared/random-user.service';
import { EventsHandlerService } from 'src/app/shared/events-handler.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/shared/pagination.service';


@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit {
  @Input() isUserRandom: boolean;
  @Input() jacekData: { firstName: string, lastName: string, age: number, pictureUrl: string};

  userData;
  fname: string;
  lname: string;
  gender: string;
  pictureUrl: string;
  age: number;

  maleSentencesArray: string[] = ['Ten nam specjalnie nie wyszedł. Nie polecam.', 'Ja bym go nie brał.', 'Zobacz, źle mu z oczu patrzy.'];
  femaleSentencesArray: string[] = ['Nic specjalnego.', 'Tej bym nie ufał.', 'Powiem szczerze. Ona się nie nada.', "Tutaj jest spore ryzyko, że pójdzie na macierzyńskie."];
  jacekSentencesArray: string[] = ['O! Ten to arcydzieło.', 'Wybierz go!', 'Ten nam wyszedł i nawet nie jest faszystą!', "Nie ma za dużo doświadczenia zawodowego, ale jest bardzo gorliwy!"];
  rejectsArray: string[] = ['Nie!', 'Wybierz kogoś innego.']
  randomSentence: string;

  constructor(private randomUser: RandomUserService, private eventsHandlerService: EventsHandlerService, private router: Router, private paginationService: PaginationService) {
  }
  ngOnInit(): void {


    if (this.isUserRandom) {
      this.randomUser.getNew().subscribe(data => {
        this.userData = data;
        this.fname = data[0][0].name.first;
        this.lname = data[0][0].name.last;
        this.pictureUrl = data[0][0].picture.large;
        this.age = data[0][0].dob.age;
        this.gender = data[0][0].gender;
        console.log(data[0][0]);
      })
    }
    else {
      this.fname = this.jacekData.firstName;
      this.lname = this.jacekData.lastName;
      this.age = this.jacekData.age;
      this.pictureUrl = this.jacekData.pictureUrl;
      console.log(this.jacekData);
    }



  }

  onHover() {
    if (this.isUserRandom)
      if (this.gender === "male") {
        this.randomSentence = this.maleSentencesArray[Math.floor(Math.random() * this.maleSentencesArray.length)];

      }

      else {
        this.randomSentence = this.femaleSentencesArray[Math.floor(Math.random() * this.femaleSentencesArray.length)];
       
      }

  else {
    this.randomSentence = this.jacekSentencesArray[Math.floor(Math.random() * this.jacekSentencesArray.length)];
    }
    this.eventsHandlerService.processEvent('just-text', this.randomSentence, 3000);
  }

  onClick(){
    if (this.isUserRandom){
      const randomReject = this.rejectsArray[Math.floor(Math.random() * this.rejectsArray.length)];
      this.eventsHandlerService.processEvent('just-text', randomReject, 2000);
    }
    else {
      this.paginationService.otherCharactersValid.emit(true);
      this.router.navigateByUrl('/contact-details');
  
    }
  }

}
