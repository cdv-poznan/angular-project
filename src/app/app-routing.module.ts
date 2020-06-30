import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { RpsComponent } from './rps/rps.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { SimonComponent } from './simon/simon.component';
// import { NbMenuComponent } from '@nebular/theme';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'rps',
    component: RpsComponent,
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'simon',
    component: SimonComponent,
    canActivate: [AngularFireAuthGuard],
  },

];

@NgModule({
  // declarations: [HomeComponent, GameoneComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


