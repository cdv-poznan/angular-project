import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-slider',
  templateUrl: './homepage-slider.component.html',
  styleUrls: ['./homepage-slider.component.scss']
})
export class HomepageSliderComponent {
  slideImages = [
    `./assets/img/slider-nba-teams.jpg`,
    `./assets/img/slider-nba-players.jpg`,
    `./assets/img/slider-nba-games.jpg`,
  ];
  slideLinks = [
    '/teams',
    '/players',
    '/games',
  ];
  slideAlts = [
    'NBA Teams',
    'NBA Players',
    'NBA Games',
  ];
  
}
