import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./movie-view.component.scss'],
})
export class MovieViewComponent implements OnInit {
  movie$: Observable<any>;
  similarMovies$: Observable<any>;
  movieCast$: Observable<any>;
  title: string;

  constructor(
    private route: ActivatedRoute,

    private apiService: ApiServiceService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getMedia(params.get('id'), 'movie'),
      ),
    );
    this.similarMovies$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getSimilar(params.get('id'), 'movie'),
      ),
    );
    this.movieCast$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getCast(params.get('id'), 'movie'),
      ),
    );
    this.movie$.subscribe((data) => {
      this.titleService.setTitle(`${data.title} - Filmeo`);
    });
  }

  public getBackground(url: string) {
    const style = {
      'background-image': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p//original/${url})`,
    };
    return style;
  }
  public getGenres(genres: Array<any>): string {
    const genresList = genres.map((e) => e.name).join(', ');
    return genresList;
  }
}
