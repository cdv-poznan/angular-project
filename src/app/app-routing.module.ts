import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceResultsComponent } from './race-results/race-results.component';
import { HomeComponent } from './home/home.component';
import { RaceScheduleComponent } from './race-schedule/race-schedule.component';
import { DriversComponent } from './drivers/drivers.component';
const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'race-results',
    component: RaceResultsComponent,
  },
  {
    path: 'race-schedule',
    component: RaceScheduleComponent,
  },
  { path: 'drivers',
    component: DriversComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
