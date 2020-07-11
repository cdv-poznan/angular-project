import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./_modules/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./_modules/games.module').then((m) => m.GamesModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./_modules/players.module').then((m) => m.PlayersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true },
    )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
