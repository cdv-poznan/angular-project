import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { PlanItemComponent } from './plan-item/plan-item.component';

@NgModule({
  declarations: [AppComponent, WeatherItemComponent, ItemListItemComponent, PlanItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
