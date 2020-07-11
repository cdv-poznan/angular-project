import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../_services/teams.service';
import { LoggingService } from '../../_services/logging.service';
import { Team } from '../../_interfaces/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
  providers: [TeamsService, LoggingService],
})
export class TeamsListComponent implements OnInit {
  public teams: Team[];

  constructor(
    private teamsService: TeamsService,
    private loggingService: LoggingService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.teams = await this.teamsService.getTeamsList();

    // this.loggingService.logStatusChange(this.teams);
  }
}
