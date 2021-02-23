import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherBasicService {

  public API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=52.400631&lon=16.901541&exclude=hourly&appid=5d19895d400e45e352196760bc5e2205&units=metric";

  constructor(private _http: HttpClient) { }  

  dailyForecast(){
    return this._http.get(this.API_URL).pipe(
      map((result) => result)
    )
  }   
}
