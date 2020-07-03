import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GamesListComponent } from './games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    GamesComponent,
    GamesListComponent,
    GameDetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, GamesRoutingModule],
})
export class GamesModule {}
