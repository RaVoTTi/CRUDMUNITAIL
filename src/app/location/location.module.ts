import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { HomeLocationComponent } from './home-location/home-location.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    LocationComponent,
    LocationViewComponent,
    LocationEditComponent,
    HomeLocationComponent,
    FormComponent,
    CardComponent,
    ViewComponent,
  ],
  imports: [CommonModule, LocationRoutingModule,FormsModule],
  exports: [LocationComponent],
})
export class LocationModule {}
