import { Component, OnInit } from '@angular/core';
import { ApiServiceService, moviesQueryTypes } from '../api-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-view',
  templateUrl: './movies-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./movies-view.component.scss'],
})
export class MoviesViewComponent implements OnInit {
  nowPlayingMovies: any[] = [];
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  constructor(
    private apiService: ApiServiceService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.getNowPlayingMovies();
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.titleService.setTitle(`Filmeo - movies`);
  }

  getNowPlayingMovies(): void {
    this.apiService
      .getMovies(moviesQueryTypes.nowPlaying)
      .subscribe((data: any) => (this.nowPlayingMovies = data.results));
  }
  getPopularMovies(): void {
    this.apiService
      .getMovies(moviesQueryTypes.popular)
      .subscribe((data: any) => (this.popularMovies = data.results));
  }
  getTopRatedMovies(): void {
    this.apiService
      .getMovies(moviesQueryTypes.topRated)
      .subscribe((data: any) => (this.topRatedMovies = data.results));
  }
}
