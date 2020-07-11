import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './_shared/shared.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { HomepageSliderComponent } from './home/homepage-slider/homepage-slider.component';
import { HomepageTeamsComponent } from './home/homepage-teams/homepage-teams.component';
import { PlayerSearchComponent } from './players/player-search/player-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    HomepageSliderComponent,
    HeaderComponent,
    FooterComponent,
    HomepageTeamsComponent,
    PlayerSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
