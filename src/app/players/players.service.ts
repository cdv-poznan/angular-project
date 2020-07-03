import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { PlayersListResponse } from '../model/players-list-response';
import { PlayerDetailsResponse } from '../model/player-details-response';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private static readonly API_URL = 'https://www.balldontlie.io/api/v1/players';

  constructor(private httpClient: HttpClient) {}

  public async getPlayers(): Promise<Player[]> {
    const response = await this.httpClient
      .get<PlayersListResponse>(PlayersService.API_URL)
      .toPromise();

    return response.data;
  }

  public async getSinglePlayer(id: number): Promise<Player> {
    const response = await this.httpClient
      .get<PlayerDetailsResponse>(`${PlayersService.API_URL}/${id}`)
      .toPromise();
    return response.data;
  }
}
