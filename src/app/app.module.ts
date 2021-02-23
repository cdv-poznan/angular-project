import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { HomeComponent } from './home/home.component';
import { AdvancedViewComponent } from './advanced-view/advanced-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent, BasicViewComponent, HomeComponent, AdvancedViewComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
