import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayersListComponent } from '../players/players-list/players-list.component';
import { PlayersRoutingModule } from '../players/players-routing.module';
import { PlayersComponent } from '../players/players.component';
import { PlayerDetailsComponent } from '../players/player-details/player-details.component';
import { PlayerStatsComponent } from '../players/player-stats/player-stats.component';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayersListComponent,
    PlayerDetailsComponent,
    PlayerStatsComponent,
  ],
  imports: [CommonModule, PlayersRoutingModule,MatTabsModule],
})
export class PlayersModule {}
