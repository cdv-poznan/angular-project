import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Drivers} from '../model/Drivers'
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DriversService {


  private content = new BehaviorSubject <string>('Default Data')
public share = this.content.asObservable

  constructor(private httpClient: HttpClient) { }
  getPosts(input: HTMLInputElement):Observable<Drivers>{
    const qwe  = input.value
    return this.httpClient.get<Drivers>(`http://ergast.com/api/f1/${qwe}/drivers/kubica/results.json`)



  }
}
