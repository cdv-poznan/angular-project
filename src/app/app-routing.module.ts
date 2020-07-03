import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './slider/character-creation.component';
import { OtherCharactersComponent } from './slider/other-characters.component';
import { ContactDetailsComponent } from './slider/contact-details.component';

const routes: Routes = [
  { path: '', component: CharacterCreationComponent },
  { path: 'characters-list', component: OtherCharactersComponent },
  { path: 'contact-details', component: ContactDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
