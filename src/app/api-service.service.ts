import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { apiKey } from 'src/environments/apiConfig';

const apiUrl: string = 'https://api.themoviedb.org/3';
const queryNowPlayingMovies: string = 'movie/now_playing';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  heroesUrl = `${apiUrl}/${queryNowPlayingMovies}/?api_key=${apiKey}&language=en-US`; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getHeroes() {
    return this.http
      .get(this.heroesUrl)
      .pipe(catchError(this.handleError('getHeroes', [])));
  }
  /** GET movie from the server */
  getMovie(id: string) {
    const movieUrl: string = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`; // URL to web api
    console.log(movieUrl);
    return this.http
      .get(movieUrl)
      .pipe(catchError(this.handleError('getMovie', [])));
  }
}
