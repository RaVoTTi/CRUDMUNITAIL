import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { HomeLocationComponent } from './home-location/home-location.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    LocationComponent,
    LocationViewComponent,
    LocationEditComponent,
    HomeLocationComponent,
    CardComponent,
    ViewComponent,
    FormComponent
  ],
  imports: [CommonModule, LocationRoutingModule,ReactiveFormsModule, SharedModule
  ],
  exports: [LocationComponent],
})
export class LocationModule {}
