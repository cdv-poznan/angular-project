import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slideImages = [
    `./assets/img/slider-nba-teams.jpg`,
    `./assets/img/slider-nba-players.jpg`,
    `./assets/img/slider-nba-stats.jpg`,
  ];
  slideLinks = [
    '/teams',
    '/players',
    '/stats',
  ];
  slideAlts = [
    'NBA Teams',
    'NBA Players',
    'NBA Stats',
  ];
  
}
