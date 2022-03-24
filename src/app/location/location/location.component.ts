import { LocationService } from './../services/location.service';
import { ILocation, ILocationPopulate } from 'src/interfaces/location.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [],
})
export class LocationComponent implements OnInit{
  locations: ILocationPopulate[] = [];

  constructor(private locationService: LocationService) {

  }
  ngOnInit(){
    this.locationService.locationGet().subscribe((resp) => {
      this.locations = resp.result
    });
  }
}
