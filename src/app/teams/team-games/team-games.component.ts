import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../_services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../_interfaces/game';

@Component({
  selector: 'app-team-games',
  templateUrl: './team-games.component.html',
  styleUrls: ['./team-games.component.scss'],
  providers: [GamesService],
})
export class TeamGamesComponent implements OnInit {
  public games: Game[];
  public errorMessage: string;

  constructor(
    private gamesService: GamesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  async ngOnInit(): Promise<void> {

    const id: string = this.activatedRoute.snapshot.params.id;
    const teamId: number = Number.parseInt(id, 10);
    if (!Number.isNaN(teamId)) {
      this.games = await this.gamesService.getGamesSpecifiedList(2019, 0, teamId,100);
      console.log(teamId);
      if (this.games === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }
  }

}
