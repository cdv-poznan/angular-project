import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayersListComponent } from '../players/players-list/players-list.component';
import { PlayersRoutingModule } from '../players/players-routing.module';
import { PlayersComponent } from '../players/players.component';
import { PlayerDetailsComponent } from '../players/player-details/player-details.component';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayersListComponent,
    PlayerDetailsComponent,
  ],
  imports: [CommonModule, PlayersRoutingModule],
})
export class PlayersModule {}
