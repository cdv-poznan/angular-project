import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeamsListComponent } from '../teams/teams-list/teams-list.component';
import { TeamsRoutingModule } from '../teams/teams-routing.module';
import { TeamsComponent } from '../teams/teams.component';
import { TeamDetailsComponent } from '../teams/team-details/team-details.component';
import { TeamPlayersComponent } from '../teams/team-players/team-players.component';
import { TeamGamesComponent } from '../teams/team-games/team-games.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamsListComponent,
    TeamDetailsComponent,
    TeamPlayersComponent,    
    TeamGamesComponent,
  ],
  imports: [CommonModule, TeamsRoutingModule,MatTabsModule],
})
export class TeamsModule {}
