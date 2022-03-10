import { LocationGet, locationGeneric, LocationPost } from './../../../interfaces/location.interface';

import { LocationService } from './../services/location.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styles: [
  ]
})
export class LocationViewComponent implements OnInit {
  id:string = ''
  placeHolders: LocationPost = locationGeneric;
  constructor(private activateRoute: ActivatedRoute, private locationService:LocationService) {

    this.activateRoute.params.subscribe(({id}) => {
      this.id = id
      this.locationService.getLocationById(id).subscribe(
      (resp)=>{
        const location = resp.location
        let {_id, user, division, ...rest } = location
        this.placeHolders = {...rest, division: division.name}
 
      }
      )
 
    })
   }

  ngOnInit(): void {

}
}
