import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { PlanItemComponent } from './plan-item/plan-item.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, WeatherItemComponent, ItemListItemComponent, PlanItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, DragDropModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
