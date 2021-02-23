import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaceResultsComponent } from './race-results.component';

const routes: Routes = [{ path: '', component: RaceResultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceResultsRoutingModule { }
