import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { apiKey } from 'src/environments/apiConfig';

const apiUrl: string = 'https://api.themoviedb.org/3';
const queryNowPlayingMovies: string = 'movie/now_playing';

export enum moviesQueryTypes {
  nowPlaying = 'now_playing',
  popular = 'popular',
  topRated = 'top_rated',
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private urlCreator = (path: string) =>
    `${apiUrl}/${path}?api_key=${apiKey}&language=en-US`;

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getMovies(query: moviesQueryTypes) {
    return this.http
      .get(this.urlCreator(`movie/${query}`))
      .pipe(catchError(this.handleError('getMovies', [])));
  }
  /** GET movie from the server */
  getMovie(id: string) {
    return this.http
      .get(this.urlCreator(`movie/${id}`))
      .pipe(catchError(this.handleError('getMovie', [])));
  }
  getSimilarMovies(id: string) {
    return this.http
      .get(this.urlCreator(`movie/${id}/similar`))
      .pipe(catchError(this.handleError('getSimilarMovies', [])));
  }
}
