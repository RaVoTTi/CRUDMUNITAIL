import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import { DivisionComponent } from './division/division.component';
import { HomeDivisionComponent } from './home-division/home-division.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DivisionComponent,
    HomeDivisionComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    ReactiveFormsModule
  ]
})
export class DivisionModule { }
