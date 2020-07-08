import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../_interfaces/player';
import { PlayerStats } from '../_interfaces/player-stats';
import { PlayersListResponse } from '../_interfaces/players-list-response';
import { PlayerDetailsResponse } from '../_interfaces/player-details-response';
import { PlayersStatsResponse } from '../_interfaces/player-stats-response';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private static readonly API_URL = 'https://www.balldontlie.io/api/v1/players';
  private static readonly JSON_URL = '/assets/json/';
  private static readonly STATS_URL = 'https://www.balldontlie.io/api/v1/season_averages';

  constructor(private httpClient: HttpClient) {}

  public async getPlayersList(): Promise<Player[]> {
    const response = await this.httpClient
      .get<PlayersListResponse>(`${PlayersService.JSON_URL}all-players.json`)
      .toPromise();

    return response.data;
  }

  public async getPlayerDetails(id: number): Promise<Player> {
    const response = await this.httpClient
      .get<Player>(`${PlayersService.API_URL}/${id}`)
      .toPromise();
    return response;
  }

  public async getPlayerActualStats(id: number): Promise<PlayerStats> {
    const response = await this.httpClient
      .get<PlayersStatsResponse>(`${PlayersService.STATS_URL}/?player_ids[]=${id}&seasons[]=2019`)
      .toPromise();
    return response.data[0];
  }

}
