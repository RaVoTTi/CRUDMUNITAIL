import { ILocationPopulate} from './../../../interfaces/location.interface';

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
  placeHolders!: ILocationPopulate;
  constructor(private activateRoute: ActivatedRoute, private locationService:LocationService) {

    this.activateRoute.params.subscribe(({id}) => {
      this.id = id
      this.locationService.locationGetById(id).subscribe(
      (resp)=>{
        const location = resp.result[0]
        
        this.placeHolders = location 
 
      }
      )
 
    })
   }

  ngOnInit(): void {

}
}
