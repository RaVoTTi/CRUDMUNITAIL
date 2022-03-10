import { LocationService } from './../services/location.service';
import { LocationGet } from 'src/interfaces/location.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [],
})
export class LocationComponent implements OnInit{
  locations: LocationGet[] = [];

  constructor(private locationService: LocationService) {

  }
  ngOnInit(){
    this.locationService.getLocation().subscribe((resp) => {
      this.locations = resp.locations
    });
  }
}
