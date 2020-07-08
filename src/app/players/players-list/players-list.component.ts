import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../_services/players.service';
import { Player } from '../../_interfaces/player';
import { Team } from '../../_interfaces/team';
import { TeamsService } from '../../_services/teams.service';
import { TeamPlayers } from '../../_interfaces/team-players';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
  providers: [TeamsService],
})
export class PlayersListComponent implements OnInit {
  public players: Player[];
  public teams: Team[];
  public teamplayers: TeamPlayers[];
  public errorMessage: string;
  public viewMode: string = 'ATL';

  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService,
  ) {}

  async ngOnInit(): Promise<void> {
    // this.teams = await this.teamsService.getTeamsList();
    this.players = await this.playersService.getPlayersList();
  }

  async changeViewMode(
    teamId: number,
    teamAbbreviation: string,
  ): Promise<void> {
    // const id: string = this.activatedRoute.snapshot.params.id;
    // const teamId: number = Number.parseInt(id, 10);
    this.viewMode = teamAbbreviation;
    if (!Number.isNaN(teamId)) {
      this.teamplayers = await this.teamsService.getTeamPlayers(teamId);
      if (this.teamplayers === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }
  }
}
