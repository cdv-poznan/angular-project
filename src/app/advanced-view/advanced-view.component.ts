import { Component, OnInit } from '@angular/core';
import { AdvancedService } from './advanced.service';

@Component({
  selector: 'app-advanced-view',
  templateUrl: './advanced-view.component.html',
  styleUrls: ['./advanced-view.component.scss']
})
export class AdvancedViewComponent implements OnInit { 
  time: any;
  sunrise: any;
  sunset: any;
  feels_like: Number;
  humidity: Number;
  pressure: Number;
  temp: Number;
  description: String;
  clouds: Number;
  icon: any;  
  deg: Number;
  speed: Number;    

  constructor(private _weather: AdvancedService) { }

  ngOnInit(){ 
    this._weather.currentWeather().subscribe(res => {            
      let timeToConv = new Date(res['dt'] * 1000); 
      this.time = timeToConv.toLocaleTimeString('pl', {month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'long'});      
      let sunriseToConv = new Date(res['sys'].sunrise * 1000);
      this.sunrise = sunriseToConv.toLocaleTimeString('pl', {hour: 'numeric', minute: 'numeric'});
      let sunsetToConv = new Date(res['sys'].sunset * 1000);
      this.sunset = sunsetToConv.toLocaleTimeString('pl', {hour: 'numeric', minute: 'numeric'});
      let tempFeelsLike = res['main'].feels_like;
      this.feels_like = Math.round(tempFeelsLike);
      this.humidity = res['main'].humidity;
      this.pressure = res['main'].pressure;
      let tempToConv = res['main'].temp
      this.temp = Math.round(tempToConv);
      this.description = res['weather'][0].description;  
      this.icon = 'http://openweathermap.org/img/w/' + res['weather'][0].icon + '.png';
      this.deg = res['wind'].deg;
      this.speed = res['wind'].speed;
    })
  } 

}
