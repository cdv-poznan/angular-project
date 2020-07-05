import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../_services/games.service';
import { LoggingService } from '../../_services/logging.service';
import { Game } from '../../_interfaces/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  providers: [GamesService, LoggingService],
})
export class GamesListComponent implements OnInit {
  public games: Game[];
  public seasons: number[] = [];

  constructor(
    private gamesService: GamesService,
    private loggingService: LoggingService,
  ) {}

  async ngOnInit(): Promise<void> {
    for(let i = 2019; i>= 1979; i--){
      this.seasons.push(i);
    }
    this.games = await this.gamesService.getGamesBySeasonList(2019, 0, 100);
  }

  async onSeasonSelected(value:number){
    this.games = await this.gamesService.getGamesBySeasonList(value, 0, 100);
}

}
