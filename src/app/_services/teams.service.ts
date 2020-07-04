import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../_interfaces/team';
import { TeamPlayers } from '../_interfaces/team-players';
import { TeamsListResponse } from '../_interfaces/teams-list-response';
import { TeamDetailsResponse } from '../_interfaces/team-details-response';
import { TeamPlayersResponse } from '../_interfaces/team-players-response';
import { Game } from '../_interfaces/game';
import { GamesListResponse } from '../_interfaces/games-list-response';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private static readonly TEAMS_API_URL = 'https://balldontlie.io/api/v1/teams';
  private static readonly GAMES_API_URL = 'https://balldontlie.io/api/v1/games';
  private static readonly JSON_URL = '/assets/json/';

  constructor(private httpClient: HttpClient) {}

  public async getTeamsList(): Promise<Team[]> {
    const response = await this.httpClient
      .get<TeamsListResponse>(TeamsService.TEAMS_API_URL)
      .toPromise();

    return response.data;
  }

  public async getTeamDetails(id: number): Promise<Team> {
    const response = await this.httpClient
      .get<TeamDetailsResponse>(`${TeamsService.TEAMS_API_URL}/${id}`)
      .toPromise();
    return response;
  }

  public async getTeamPlayers(id: number): Promise<TeamPlayers[]> {
    const response = await this.httpClient
      .get<TeamPlayersResponse>(`${TeamsService.JSON_URL}${id}-players.json`)
      .toPromise();
    return response.data;
  }


}
