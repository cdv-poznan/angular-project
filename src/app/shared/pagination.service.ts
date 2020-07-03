import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  @Output() characterCreationValid = new EventEmitter<boolean>();
  @Output() otherCharactersValid = new EventEmitter<boolean>();

}
