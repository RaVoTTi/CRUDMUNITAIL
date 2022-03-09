import { LocationService } from './../services/location.service';
import { LocationGet } from 'src/interfaces/location.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [],
})
export class LocationComponent {
  locations: LocationGet[] = [];

  constructor(private locationService: LocationService) {
    this.locationService.getLocation().subscribe((resp) => {
      this.locations = resp.locations
    });
  }
}
