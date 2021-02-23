import { Component, OnInit } from '@angular/core';
import { EventsHandlerService } from '../shared/events-handler.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private eventsHandlerService: EventsHandlerService) { }

  ngOnInit(): void {
    this.eventsHandlerService.processEvent("just-text", "Szybko, masz tu numer i dzwoń do niego, zanim ktoś go zajmie!", 3000);

  }

}
