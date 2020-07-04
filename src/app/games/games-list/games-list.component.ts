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

  constructor(
    private gamesService: GamesService,
    private loggingService: LoggingService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.games = await this.gamesService.getGamesList();
  }

}
