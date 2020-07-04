import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../_services/teams.service';
import { LoggingService } from '../../_services/logging.service';
import { TeamPlayers } from '../../_interfaces/team-players';


@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.scss'],
  providers: [TeamsService, LoggingService],
})
export class TeamPlayersComponent implements OnInit {
  public teamplayers: TeamPlayers[];
  public errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService,
  ) {}

  async ngOnInit(): Promise<void> {
    const id: string = this.activatedRoute.snapshot.params.id;
    const teamId: number = Number.parseInt(id, 10);
    if (!Number.isNaN(teamId)) {
      this.teamplayers = await this.teamsService.getTeamPlayers(teamId);
      console.log(teamId);
      if (this.teamplayers === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }
  }
}
