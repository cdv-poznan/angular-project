import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeViewComponent } from './home-view/home-view.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxGlideModule } from 'ngx-glide';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultComponent } from './search-view/search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeViewComponent,
    MovieViewComponent,
    CarouselComponent,
    SearchViewComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxGlideModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpErrorHandler, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
