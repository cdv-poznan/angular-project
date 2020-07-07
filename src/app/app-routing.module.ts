import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { AdvancedViewComponent } from './advanced-view/advanced-view.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'wykres-7-dniowy',
  component: BasicViewComponent,
}, {
  path: 'teraz',
  component: AdvancedViewComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
