import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayersListComponent,
    PlayerDetailsComponent,
  ],
  imports: [CommonModule, PlayersRoutingModule],
})
export class PlayersModule {}
