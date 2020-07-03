import { Injectable, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Injectable({ providedIn: 'root' })

export class EventsHandlerService {
    @Output() changeMyszaText = new EventEmitter<string>();
    @Output() changeMyszaState = new EventEmitter<string>();
    @Output() downloadanimationActiveFromAvatarComponent = new EventEmitter();

    //odpowiedzi na zle wybrana plec
    genderRejects: string[] = ["Naprawdę płeć robi Ci taką różnicę?", "Proszę, zaznacz odpowiednią płeć.", "Adrian, naprawdę? Propraw to.", "Adrian..."];

    animationActive = false;
    endingInterval: any;

    getanimationActive() {
        console.log(this.animationActive);
    }
    setanimationStatus(newStatus: boolean) {
        this.animationActive = newStatus;
    }

    //przetwarza dane i decyduje, jakie eventy dodac
    processEvent(eventID: string, txt?: string, duration?: number) {
        let defaultDuration = 3000;
        if (duration){
            defaultDuration = duration;
        }
            //sprawdza event ID
            switch (eventID) {
                //jesli tylko gadanie
                case 'just-text':
                    if (txt) {
                        this.addEvent('talking', txt, defaultDuration);
                        break;
                    }
                    break;
                // cos innego
                case 'gender-rejects':
                    let randomReject = this.genderRejects[Math.floor(Math.random() * this.genderRejects.length)];
                    this.addEvent('talking', randomReject, defaultDuration);
                    break;
                // jeszcze cos innego
                case 'slider':
                    break;
            }

    }

    // addEvent(animationName: string, text: string, eventDuration: number) {
    //     const isActiveChecker = interval(100).subscribe(() => {
    //         if (this.animationActive === false) {
    //             console.log(text);
    //             this.animationActive = true;
    //             isActiveChecker.unsubscribe();
    //             this.changeMyszaText.emit(text);
    //             this.changeMyszaState.emit(animationName);
    //             const endingInterval = interval(eventDuration).subscribe(() => {
    //                 endingInterval.unsubscribe();
    //                 this.changeMyszaText.emit('');
    //                 this.changeMyszaState.emit('basic');
    //                 this.animationActive = false;
    //             })
    //         }

    //     })
    // }
    addEvent(animationName: string, text: string, eventDuration: number) {

            if(this.endingInterval){
                this.endingInterval.unsubscribe();
            }
            this.animationActive = true;
            this.changeMyszaText.emit(text);
            this.changeMyszaState.emit(animationName);
            this.endingInterval = interval(eventDuration).subscribe(() => {
                this.endingInterval.unsubscribe();
                this.changeMyszaText.emit('');
                this.changeMyszaState.emit('basic');
                this.animationActive = false;
            })
      
                
    }
}