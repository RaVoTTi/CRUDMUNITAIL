import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { HomeLocationComponent } from './home-location/home-location.component';

@NgModule({
  declarations: [
    LocationComponent,
    LocationViewComponent,
    LocationEditComponent,
    HomeLocationComponent,
  ],
  imports: [CommonModule, LocationRoutingModule],
  exports: [LocationComponent],
})
export class LocationModule {}
