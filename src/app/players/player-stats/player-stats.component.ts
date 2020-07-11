import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../_services/players.service';
import { PlayerStats } from '../../_interfaces/player-stats';


@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
  providers: [PlayersService],
})
export class PlayerStatsComponent implements OnInit {
  public playerstats: PlayerStats;
  public errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playersService: PlayersService,
  ) {}

  async ngOnInit(): Promise<void> {
    const id: string = this.activatedRoute.snapshot.params.id;
    const playerId: number = Number.parseInt(id, 10);
    if (!Number.isNaN(playerId)) {
      this.playerstats = await this.playersService.getPlayerActualStats(playerId);
      if (this.playerstats === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }
  }

}
