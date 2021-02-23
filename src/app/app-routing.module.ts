import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TagComponent } from './tag/tag.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tag/:name',
    component: TagComponent,
  },
  {
    path: 'video-details/:id',
    component: VideoDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
