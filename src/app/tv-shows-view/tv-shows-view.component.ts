import { Component, OnInit } from '@angular/core';
import { ApiServiceService, showsQueryTypes } from '../api-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-view',
  templateUrl: './tv-shows-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./tv-shows-view.component.scss'],
})
export class TvShowsViewComponent implements OnInit {
  nowPlaying: any[] = [];
  popular: any[] = [];
  topRated: any[] = [];
  constructor(
    private apiService: ApiServiceService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.getNowPlaying();
    this.getPopular();
    this.getTopRated();
    this.titleService.setTitle(`Filmeo - tv shows`);
  }

  getNowPlaying(): void {
    this.apiService
      .getShows(showsQueryTypes.nowPlaying)
      .subscribe((data: any) => (this.nowPlaying = data.results));
  }
  getPopular(): void {
    this.apiService
      .getShows(showsQueryTypes.popular)
      .subscribe((data: any) => (this.popular = data.results));
  }
  getTopRated(): void {
    this.apiService
      .getShows(showsQueryTypes.topRated)
      .subscribe((data: any) => (this.topRated = data.results));
  }
}
