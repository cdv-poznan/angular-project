import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GamesListComponent } from '../games/games-list/games-list.component';
import { GamesRoutingModule } from '../games/games-routing.module';
import { GamesComponent } from '../games/games.component';
import { GameDetailsComponent } from '../games/game-details/game-details.component';

import { GameDateToUrlPipe } from '../_pipes/game-date-to-url.pipe';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    GamesComponent,
    GamesListComponent,
    GameDetailsComponent,
    GameDateToUrlPipe
  ],
  imports: [CommonModule, GamesRoutingModule, FormsModule,],
  exports: [GameDateToUrlPipe]
})
export class GamesModule {}
