import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

 @Output() clickButton = new EventEmitter<void>();
 @Input() customClasses: string;

}


// <button class="btn blue mr-5" (click)="addVote(quotation, +1)">
//                 <i class="material-icons">exposure_plus_1</i>
//               </button>
