import { Component, ElementRef, OnInit } from '@angular/core';
import { EventsHandlerService } from './shared/events-handler.service';
import { PaginationService } from './shared/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  characterCreationStatus = false;
  otherCharactersStatus = false;
  contactDetailsStatus = false;


  constructor(private eventsHandlerService: EventsHandlerService, private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.paginationService.characterCreationValid.subscribe((val) => {
        this.characterCreationStatus = val;
        
    })
    this.paginationService.otherCharactersValid.subscribe((val) => {
        this.otherCharactersStatus = val;
        console.log('w app komponent mam wartosc:' + val);
    })
    this.paginationService.characterCreationValid.subscribe((val) => {
        this.contactDetailsStatus = val;
    })
  }

  onEvent(eventID: string, optionalText: string) {
    this.eventsHandlerService.processEvent(eventID, optionalText);
  }
}

