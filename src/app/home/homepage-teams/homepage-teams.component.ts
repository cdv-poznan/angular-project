import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../_services/teams.service';
import { Team } from '../../_interfaces/team';

@Component({
  selector: 'app-homepage-teams',
  templateUrl: './homepage-teams.component.html',
  styleUrls: ['./homepage-teams.component.scss']
})
export class HomepageTeamsComponent implements OnInit {
  public teams: Team[];

  constructor(private teamsService: TeamsService) { }

  async ngOnInit(): Promise<void> {
    this.teams = await this.teamsService.getTeamsList();
  }

}
