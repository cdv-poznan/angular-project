import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersListComponent,
    children: [
      {
        path: ':id',
        component: PlayerDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
