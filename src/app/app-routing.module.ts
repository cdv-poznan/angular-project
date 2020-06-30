import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { MovieViewComponent } from './movie-view/movie-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'movie/:id', component: MovieViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
