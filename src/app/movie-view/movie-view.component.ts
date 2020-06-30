import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./movie-view.component.scss'],
})
export class MovieViewComponent implements OnInit {
  movie$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiServiceService,
  ) {}

  ngOnInit() {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getMovie(params.get('id')),
      ),
    );
  }
  public getBackground(url) {
    const style = {
      'background-image': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p//original/${url})`,
    };
    console.log(style);
    return style;
  }
}
