import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RaceSchedule} from '../model/RaceSchedule'
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RaceScheduleService {


  private content = new BehaviorSubject <string>('Default Data')
public share = this.content.asObservable

  constructor(private httpClient: HttpClient) { }
  getPosts(input: HTMLInputElement):Observable<RaceSchedule>{
    const qwe  = input.value
    return this.httpClient.get<RaceSchedule>(`http://ergast.com/api/f1/${qwe}/constructorStandings.json`)
  }
}
