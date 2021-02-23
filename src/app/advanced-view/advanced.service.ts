import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvancedService {
  // public static readonly APPID = "5d19895d400e45e352196760bc5e2205";
  // public static readonly units = "metric";
  // public static readonly city = "Poznan";

  // public API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${APPID}`;
  // }

  public API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&appid=5d19895d400e45e352196760bc5e2205';

  constructor(private _http: HttpClient) {}

  currentWeather(){
    return this._http.get(this.API_URL).pipe(
      map((result) => result)
    )
  }
}

 



