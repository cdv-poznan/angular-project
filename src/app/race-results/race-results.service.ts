import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RaceResults} from '../model/RaceResults'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceResultsService {
  private content = new BehaviorSubject <string>('Default Data')
  public share = this.content.asObservable

    constructor(private httpClient: HttpClient) { }
    getPosts(input: HTMLInputElement):Observable<RaceResults>{
      const qwe  = input.value
      return this.httpClient.get<RaceResults>(`http://ergast.com/api/f1/${qwe}/driverStandings.json`)



    }
}
