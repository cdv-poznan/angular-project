import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamsListComponent,
    TeamDetailsComponent,
  ],
  imports: [CommonModule, TeamsRoutingModule],
})
export class TeamsModule {}
