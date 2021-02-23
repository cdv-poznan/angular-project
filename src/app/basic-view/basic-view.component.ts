import { Component, OnInit } from '@angular/core';
import { WeatherBasicService } from './weather-basic.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.scss']
})
export class BasicViewComponent implements OnInit {
  title = 'weatherAngular';
  canvas: any;
  ctx: any;    

  constructor(private _weather: WeatherBasicService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');    
    this._weather.dailyForecast().subscribe(res => {
      let temp_max = res['daily'].map(res => res.temp.max)
      let temp_min = res['daily'].map(res => res.temp.min)
      let rain = res['daily'].map(res => res.rain)
      let alldates = res['daily'].map(res => res.dt)

      let removedUndefRain = rain.map((item) => (item === undefined ? 0 : item));

      let weatherDates = []
      alldates.forEach((res) => {
        let jsdate = new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('pl',{month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'}))
      })

      let myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels: weatherDates,
            datasets: [
              {
                label: 'Temperatura maksymalna',
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false,                
                borderWidth: 2
              },
              {
                label: 'Temperatura minimalna',
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false,
                borderWidth: 2
              },
              {
                type: 'bar',
                label: 'Opady w mm',
                data: removedUndefRain,
                borderColor: '#1E90FF',
                backgroundColor: '#B0C4DE',
                borderWidth: 2
              }
            ]
        },
        options: {
          responsive: false,
          display:true
        }
      });
    })    
  }

}
