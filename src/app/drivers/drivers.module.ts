import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';


@NgModule({
  declarations: [DriversComponent],
  imports: [
    CommonModule,
    DriversRoutingModule,
    MatTableModule
  ]
})
export class DriversModule { }
