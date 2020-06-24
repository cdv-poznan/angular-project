import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { RpsComponent } from './rps/rps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SnakeComponent } from './snake/snake.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BoardComponent, 
    SquareComponent, 
    RpsComponent, 
    SnakeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    NbThemeModule.forRoot({ name: 'dark' }), 
    NbLayoutModule, 
    NbEvaIconsModule,
    NbButtonModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule implements DoBootstrap{
  constructor(injector: Injector){
    const snakeComponent = createCustomElement(SnakeComponent, {injector});
    customElements.define('ng-snake', snakeComponent);
  }
  ngDoBootstrap(appRef: import("@angular/core").ApplicationRef): void { }
  
}
