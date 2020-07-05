import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { apiKey } from 'src/environments/apiConfig';
import { Observable } from 'rxjs';

export enum moviesQueryTypes {
  nowPlaying = 'now_playing',
  popular = 'popular',
  topRated = 'top_rated',
}
export enum showsQueryTypes {
  nowPlaying = 'on_the_air',
  popular = 'popular',
  topRated = 'top_rated',
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  apiUrl: string = 'https://api.themoviedb.org/3';

  options = { params: new HttpParams().set('api_key', apiKey) };

  private urlCreator = (path: string, page: number = 1, query = '') =>
    `${this.apiUrl}/${path}?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`;

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getMovies(query: moviesQueryTypes): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/movie/${query}`, this.options)
      .pipe(catchError(this.handleError('getMovies', [])));
  }

  getShows(query: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/tv/${query}`, this.options)
      .pipe(catchError(this.handleError('getShows', [])));
  }

  getMedia(id: string, mediaType: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${mediaType}/${id}`, this.options)
      .pipe(catchError(this.handleError('getMovie', [])));
  }

  getPerson(id: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/person/${id}`, this.options)
      .pipe(catchError(this.handleError('getPerson', [])));
  }
  getSimilar(id: string, mediaType: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${mediaType}/${id}/similar`, this.options)
      .pipe(catchError(this.handleError('getSimilar', [])));
  }
  getCast(id: string, mediaType: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${mediaType}/${id}/credits`, this.options)
      .pipe(catchError(this.handleError('getCast', [])));
  }
  getPersonFilmography(id: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/person/${id}/movie_credits`, this.options)
      .pipe(catchError(this.handleError('getPersonFilmography', [])));
  }
  getSearchResuts(category: string, query: string, page: any): Observable<any> {
    const searchParams = this.options.params
      .set('page', page)
      .set('query', query);
    const searchOptions = {
      params: searchParams,
    };
    console.log(searchOptions);
    return this.http
      .get(`${this.apiUrl}/search/${category}`, searchOptions)
      .pipe(catchError(this.handleError('getSearchResults', [])));
  }
}
