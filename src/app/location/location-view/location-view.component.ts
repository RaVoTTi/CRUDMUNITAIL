import { LocationGet, locationGetGeneric, LocationPost } from './../../../interfaces/location.interface';

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
  placeHolders: LocationGet = locationGetGeneric;
  constructor(private activateRoute: ActivatedRoute, private locationService:LocationService) {

    this.activateRoute.params.subscribe(({id}) => {
      this.id = id
      this.locationService.getLocationById(id).subscribe(
      (resp)=>{
        const location = resp.location
        let {_id, user, ...rest } = location
        this.placeHolders = {...rest}
 
      }
      )
 
    })
   }

  ngOnInit(): void {

}
}
