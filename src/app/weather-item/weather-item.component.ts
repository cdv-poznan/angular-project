import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  WeatherData: any;
  newCity: string;



  api = {
    key: 'e711423123defaecab4fcd7b9df89c3a',
    base: 'http://api.openweathermap.org/data/2.5/',
  };


  constructor(private httpService: HttpService ) { }


  ngOnInit(): void {

    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData() {
    fetch(this.api.base + 'weather?q=' + this.newCity + '&units=metric&APPID=' + this.api.key + '&lang=pl')
    .then(response => response.json())
    .then(data => {this.setWeatherData(data); }
    );
  }

  add() {
    const location = {
      newCity: this.newCity
    };
    this.getWeatherData();
    console.log(this.getWeatherData());
  }

  setWeatherData(data) {
    this.WeatherData = data;
    const sunsetTime = new Date(this.WeatherData.sys.sunset);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);
    this.WeatherData.icon = (this.WeatherData.main.icon);
    
    // '<img class="icon-weather" src="../../icons/04d.png">');
  }

  // dateBuilder(d) {
  //   const months = [
  //     'Styczeń',
  //     'Luty',
  //     'Marzec',
  //     'Kwiecień',
  //     'Maj',
  //     'Czerwiec',
  //     'Lipiec',
  //     'Sierpień',
  //     'Wrzesień',
  //     'Październik',
  //     'Listopad',
  //     'Grudzień',
  //   ];
  //   const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  //   const day = days[d.getDay()];
  //   const date = d.getDate();
  //   const month = months[d.getMonth()];
  //   const year = d.getFullYear();
  //   return `${day} ${date} ${month} ${year}`;
  // }

}
