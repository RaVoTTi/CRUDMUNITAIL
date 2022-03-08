import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import { DivisionComponent } from './division/division.component';
import { HomeDivisionComponent } from './home-division/home-division.component';


@NgModule({
  declarations: [
    DivisionComponent,
    HomeDivisionComponent
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule
  ]
})
export class DivisionModule { }
