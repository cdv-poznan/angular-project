import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../_interfaces/player';
import { PlayersListResponse } from '../_interfaces/players-list-response';
import { PlayerDetailsResponse } from '../_interfaces/player-details-response';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private static readonly API_URL = 'https://www.balldontlie.io/api/v1/players';

  constructor(private httpClient: HttpClient) {}

  public async getPlayersList(): Promise<Player[]> {
    const response = await this.httpClient
      .get<PlayersListResponse>(PlayersService.API_URL)
      .toPromise();

    return response.data;
  }

  public async getPlayerDetails(id: number): Promise<Player> {
    const response = await this.httpClient
      .get<Player>(`${PlayersService.API_URL}/${id}`)
      .toPromise();
    return response;
  }
}
