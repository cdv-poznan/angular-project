import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorTshirtComponent } from './configurator-tshirt/configurator-tshirt.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing-page'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
  path: 'configurator-tshirt',
  component: ConfiguratorTshirtComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
