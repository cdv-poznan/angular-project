import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Team } from '../../model/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public teams: Team[];

  constructor(private teamsService: TeamsService) { }

  async ngOnInit(): Promise<void> {
    this.teams = await this.teamsService.getTeams();
  }

}
