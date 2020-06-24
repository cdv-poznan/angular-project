import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { RpsComponent } from './rps/rps.component';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'rps',
    component: RpsComponent,
  },
  {
    path: 'snake',
    component: SnakeComponent,
  },
];

@NgModule({
  // declarations: [HomeComponent, GameoneComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


