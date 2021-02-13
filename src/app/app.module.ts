import { NgModule, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { RpsComponent } from './rps/rps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbIconModule, NbSidebarModule, NbMenuComponent } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { createCustomElement} from '@angular/elements';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SimonComponent } from './simon/simon.component';
// import { MenuComponent } from './menu/menu.component';





@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BoardComponent, 
    SquareComponent, 
    RpsComponent, 
    SimonComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    NbThemeModule.forRoot({ name: 'dark' }), 
    NbLayoutModule, 
    NbEvaIconsModule,
    NbButtonModule,
    NbIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    NbSidebarModule.forRoot(),
    NbSidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule implements DoBootstrap{
  constructor(injector: Injector){
  }

  ngDoBootstrap(appRef: import("@angular/core").ApplicationRef): void { }
  
}
