import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent,
  },
  {    
    path: ':id',
    component: GameDetailsComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
