import { Component, OnInit, OnChanges } from '@angular/core';
import { EventsHandlerService } from 'src/app/shared/events-handler.service';

@Component({
  selector: 'app-mysza-text',
  templateUrl: './mysza-text.component.html',
  styleUrls: ['./mysza-text.component.scss']
})
export class MyszaTextComponent implements OnInit {
  textBody: string = "";
  constructor(private eventsHandlerSevice: EventsHandlerService) {}

  ngOnInit(): void {
    this.eventsHandlerSevice.changeMyszaText.subscribe((text: string) => {
      this.textBody = text;
    })
  }


}
