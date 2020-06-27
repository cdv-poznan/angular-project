import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConfiguratorTshirtComponent } from './configurator-tshirt/configurator-tshirt.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent, ConfiguratorTshirtComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
