import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../_services/games.service';
import { Game } from '../../_interfaces/game';
import { TeamsService } from '../../_services/teams.service';
import { Team } from '../../_interfaces/team';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  providers: [GamesService],
})
export class GamesListComponent implements OnInit {
  public games: Game[];
  public teams: Team[];
  public seasons: number[] = [];

  constructor(
    private gamesService: GamesService,
    private teamsService: TeamsService
  ) {}

  async ngOnInit(): Promise<void> {
    for(let i = 2019; i>= 1979; i--){
      this.seasons.push(i);
    }
    this.teams = await this.teamsService.getTeamsList();
    this.games = await this.gamesService.getGamesSpecifiedList(2019, 0, 0, 100);
  }

  async onSeasonTeamSelected(season:number = 0, team:number = 0){
    this.games = await this.gamesService.getGamesSpecifiedList(season, 0, team, 100);
  }

}
