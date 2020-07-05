import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherItemComponent } from './weather-item/weather-item.component';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiKey = 'e711423123defaecab4fcd7b9df89c3a';

  url;
  constructor(private http: HttpClient) {
  this.url = 'http://api.openweathermap.org/data/2.5/';
}

  getWeather(city) {
    return this.http.get(this.url + 'weather?q=' + city + '&units=metric&APPID=' + this.apiKey + '&lang=pl');

  }

}
