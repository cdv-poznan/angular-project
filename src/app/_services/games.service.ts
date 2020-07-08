import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../_interfaces/game';
import { GamesListResponse } from '../_interfaces/games-list-response';
import { GameDetailsResponse } from '../_interfaces/game-details-response';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private static readonly GAMES_URL = 'https://balldontlie.io/api/v1/games';

  constructor(private httpClient: HttpClient) {}

  public async getGamesList(): Promise<Game[]> {
    const response = await this.httpClient
      .get<GamesListResponse>(GamesService.GAMES_URL)
      .toPromise();

    return response.data;
  }

  public async getGameDetails(id: number): Promise<Game> {


    const response = await this.httpClient
      .get<GameDetailsResponse>(`${GamesService.GAMES_URL}/${id}`)
      .toPromise();
    return response;
  }

  public async getGamesSpecifiedList(gameSeasonToShow: number, gamePageToShow: number, gameTeamIDToShow: any, gamePerPageToShow: number): Promise<Game[]> {
    let urlGameSeason: string;
    const urlParametersPage = `&page=${gamePageToShow}`;
    let urlTeamIDs: string;
    const urlParametersPerPage = `&per_page=${gamePerPageToShow}`;
    let nbaAllGamesURL = '';
    if(gameSeasonToShow != 0){
      urlGameSeason = `?seasons[]=${gameSeasonToShow}`;
    } else {
      urlGameSeason = `?seasons[]=2019`;
    }
    
    if(gameTeamIDToShow != 0){
      urlTeamIDs = `&team_ids[]=${gameTeamIDToShow}`; 
    } else {
      urlTeamIDs = ``;
    }
   
    nbaAllGamesURL  = `${GamesService.GAMES_URL}${urlGameSeason}${urlParametersPage}${urlTeamIDs}${urlParametersPerPage}`;
   
    const response = await this.httpClient
      .get<GamesListResponse>(nbaAllGamesURL)
      .toPromise();

    return response.data;
  }

  public async getGamesBySeasonList(gameSeasonToShow: number, gamePageToShow: number, gamePerPageToShow: number): Promise<Game[]> {
    const urlGameSeason = `?seasons[]=${gameSeasonToShow}`;
    const urlParametersPage = `&page=${gamePageToShow}`;
    const urlParametersPerPage = `&per_page=${gamePerPageToShow}`;
    const nbaAllGamesURL = `${GamesService.GAMES_URL}${urlGameSeason}${urlParametersPage}${urlParametersPerPage}`;
    const response = await this.httpClient
      .get<GamesListResponse>(nbaAllGamesURL)
      .toPromise();

    return response.data;
  }



}
