import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { MyszaComponent } from './mysza/mysza.component';
import { MyszaTextComponent } from './mysza/mysza-text/mysza-text.component';
import { MyszaAvatarComponent } from './mysza/mysza-avatar/mysza-avatar.component';
import { CharacterCreationComponent } from './slider/character-creation.component';
import { OtherCharactersComponent } from './slider/other-characters.component';
import { ContactDetailsComponent } from './slider/contact-details.component';
import { SingleCharacterComponent } from './slider/single-character/single-character.component';

@NgModule({
  declarations: [AppComponent, MyszaComponent, MyszaTextComponent, MyszaAvatarComponent, CharacterCreationComponent, OtherCharactersComponent, ContactDetailsComponent, SingleCharacterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
