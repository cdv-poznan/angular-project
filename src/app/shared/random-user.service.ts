import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  url: string = " https://randomuser.me/api/ "

  constructor(private http: HttpClient) { }

  public getNew(): Observable<any> {
    return this.http.get(this.url)
      .pipe(map(responseData => {
        const returnDataArray = [];
        for (const key in responseData) {
          returnDataArray.push(responseData[key])
        }
        return returnDataArray;
      }))
  }

}
