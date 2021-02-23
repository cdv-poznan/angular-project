import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { MatIconModule} from  '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule} from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { FormsModule} from '@angular/forms'
import { RaceScheduleComponent } from './race-schedule/race-schedule.component';
import { DriversComponent } from './drivers/drivers.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [AppComponent, HomeComponent,RaceResultsComponent,RaceScheduleComponent,DriversComponent],
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
