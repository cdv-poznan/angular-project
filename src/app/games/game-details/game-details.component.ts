import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../_services/games.service';
import { Game } from '../../_interfaces/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  providers: [GamesService],
})
export class GameDetailsComponent implements OnInit {
  public game: Game;
  public errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService,
  ) {}

  async ngOnInit(): Promise<void> {
    const id: string = this.activatedRoute.snapshot.params.id;
    const gameId: number = Number.parseInt(id, 10);
    if (!Number.isNaN(gameId)) {
      this.game = await this.gamesService.getGameDetails(gameId);
      console.log(gameId);
      if (this.game === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }
  }

}
