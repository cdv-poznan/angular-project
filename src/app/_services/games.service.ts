import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../_interfaces/game';
import { GamesListResponse } from '../_interfaces/games-list-response';
import { GameDetailsResponse } from '../_interfaces/game-details-response';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private static readonly API_URL = 'https://balldontlie.io/api/v1/games';

  constructor(private httpClient: HttpClient) {}

  public async getGamesList(): Promise<Game[]> {
    const response = await this.httpClient
      .get<GamesListResponse>(GamesService.API_URL)
      .toPromise();

    return response.data;
  }

  public async getGameDetails(id: number): Promise<Game> {

    // console.log(`${TeamsService.API_URL}/${id}`);

    const response = await this.httpClient
      .get<GameDetailsResponse>(`${GamesService.API_URL}/${id}`)
      .toPromise();
    return response;
    // console.log(response.data);
  }
}
