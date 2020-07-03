import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventsHandlerService } from 'src/app/shared/events-handler.service';


@Component({
  selector: 'app-mysza-avatar',
  templateUrl: './mysza-avatar.component.html',
  styleUrls: ['./mysza-avatar.component.scss']
})

export class MyszaAvatarComponent implements OnInit {
public myszaState: string = "basic";


  //lokalny status animacji


  constructor(private eventsHandlerService: EventsHandlerService) {
  }

  ngOnInit(): void {
    this.eventsHandlerService.changeMyszaState.subscribe((animationName: string) =>{
      this.myszaState = animationName;

    });
  }

}


