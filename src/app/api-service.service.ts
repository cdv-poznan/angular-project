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
  private urlCreator = (path: string, page: number = 1, query = '') =>
    `${apiUrl}/${path}?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`;

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
    console.log(this.urlCreator(`movie/${id}`));
    return this.http
      .get(this.urlCreator(`movie/${id}`))
      .pipe(catchError(this.handleError('getMovie', [])));
  }
  /** GET movie from the server */
  getPerson(id: string) {
    return this.http
      .get(this.urlCreator(`person/${id}`))
      .pipe(catchError(this.handleError('getPerson', [])));
  }
  getSimilarMovies(id: string) {
    return this.http
      .get(this.urlCreator(`movie/${id}/similar`))
      .pipe(catchError(this.handleError('getSimilarMovies', [])));
  }
  getPersonFilmography(id: string) {
    return this.http
      .get(this.urlCreator(`person/${id}/movie_credits`))
      .pipe(catchError(this.handleError('getPersonFilmography', [])));
  }
  getSearchResuts(category, query, page) {
    console.log(this.urlCreator(`search/${category}`, page, query));
    return this.http
      .get(this.urlCreator(`search/${category}`, page, query))
      .pipe(catchError(this.handleError('getSearchResults', [])));
  }
}
