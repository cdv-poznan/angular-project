import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../_services/players.service';
import { Player } from '../../_interfaces/player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
  providers: [PlayersService],
})

export class PlayerDetailsComponent implements OnInit {
  public player: Player;
  public errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playersService: PlayersService,
  ) {}

  async ngOnInit(): Promise<void> {
    const id: string = this.activatedRoute.snapshot.params.id;
    const playerId: number = Number.parseInt(id, 10);
    if (!Number.isNaN(playerId)) {
      this.player = await this.playersService.getPlayerDetails(playerId);
      if (this.player === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }
  }

}
