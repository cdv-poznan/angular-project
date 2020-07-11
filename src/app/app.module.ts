import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TagComponent } from './tag/tag.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, BookmarksComponent, TagComponent, VideoDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
