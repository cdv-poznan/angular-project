import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { Team } from '../../model/team';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  public team: Team;
  public errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  async ngOnInit(): Promise<void> {
    const id: string = this.activatedRoute.snapshot.params.id;
    const teamId: number = Number.parseInt(id, 10);
    if (!Number.isNaN(teamId)) {
      this.team = await this.teamsService.getTeamDetails(teamId);
      console.log(teamId);
      if (this.team === undefined) {
        this.errorMessage = 'No such team';
      }
    } else {
      this.errorMessage = 'Not a valid team ID';
    }    
  }

}

