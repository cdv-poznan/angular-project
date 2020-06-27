import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConfiguratorTshirtComponent } from './configurator-tshirt/configurator-tshirt.component';
import { fabric } from 'fabric';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormsModule } from '@angular/forms';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent, ConfiguratorTshirtComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, BrowserAnimationsModule, MatRadioModule],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
