import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-view',
  templateUrl: './tv-show-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./tv-show-view.component.scss'],
})
export class TvShowViewComponent implements OnInit {
  show$: Observable<any>;
  similarShows$: Observable<any>;
  showCast$: Observable<any>;
  title;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiServiceService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.show$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getMedia(params.get('id'), 'tv'),
      ),
    );
    this.similarShows$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getSimilar(params.get('id'), 'tv'),
      ),
    );
    this.showCast$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getCast(params.get('id'), 'tv'),
      ),
    );
    this.show$.subscribe((data) => {
      this.titleService.setTitle(`${data.name} - Filmeo`);
    });
  }

  public getBackground(url) {
    const style = {
      'background-image': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p//original/${url})`,
    };
    return style;
  }
  public getGenres(genres) {
    const genresList = genres.map((e) => e.name).join(', ');
    return genresList;
  }
}
