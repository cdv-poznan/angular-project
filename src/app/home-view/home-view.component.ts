import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 20,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      1200: {
        items: 6,
      },
      992: {
        items: 4,
      },
      768: {
        items: 3,
      },
      576: {
        items: 2,
      },
    },
    nav: true,
  };

  movies: any[] = [];
  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.apiService
      .getHeroes()
      .subscribe((movie: any) => (this.movies = movie.results));
  }
}
