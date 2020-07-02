import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { SearchViewComponent } from './search-view/search-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent, pathMatch: 'full' },
  { path: 'movie/:id', component: MovieViewComponent },
  { path: 'search', component: SearchViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
