import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { TeamsListResponse } from '../model/teams-list-response';
import { TeamDetailsResponse } from '../model/team-details-response';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private static readonly API_URL = 'https://balldontlie.io/api/v1/teams';

  constructor(private httpClient: HttpClient) {}

  public async getTeams(): Promise<Team[]> {
    const response = await this.httpClient
      .get<TeamsListResponse>(TeamsService.API_URL)
      .toPromise();

    return response.data;
  }

  public async getTeamDetails(id: number): Promise<Team> {
    const response = await this.httpClient
      .get<TeamDetailsResponse>(`${TeamsService.API_URL}/${id}`)
      .toPromise();
    return response.data;
    // console.log(response.data);
  }
}
