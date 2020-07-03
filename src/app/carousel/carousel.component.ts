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

  link: string;
  imagePath: string;
  imageFullPath: string;

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
      '376': {
        items: 3,
      },
      '792': {
        items: 4,
      },
      '1000': {
        items: 5,
      },
    },
    nav: true,
  };

  constructor() {}

  ngOnInit(): void {}
  public getImage(result) {
    let imagePath;
    switch (this.mediaType) {
      case 'tv':
        imagePath = result.poster_path;
        break;
      case 'movie':
        imagePath = result.poster_path;
        break;
      case 'person':
        imagePath = result.profile_path;
        break;
      default:
        break;
    }
    return imagePath
      ? `https://image.tmdb.org/t/p/w342${imagePath}`
      : 'https://fakeimg.pl/342x513/?text=No%20image';
  }
}
