import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselContext;
  @Input() mediaType;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 20,
    dots: false,
    navSpeed: 700,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],

    responsive: {
      '0': {
        items: 2,
      },
      '576': {
        items: 3,
      },
      '992': {
        items: 4,
      },
      '1200': {
        items: 5,
      },
    },
    nav: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
