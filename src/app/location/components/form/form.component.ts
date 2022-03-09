import { LocationService } from './../../services/location.service';
import { DivisionService } from './../../../division/services/division.service';
import { IdName } from './../../../../interfaces/division.interface';
import { LocationPost, locationGeneric } from 'src/interfaces/location.interface'
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {

  @Input() placeHolders: LocationPost = locationGeneric
  divisions: IdName[]= []
  division:string =''
  
  constructor(private locationService: LocationService, private divisionService: DivisionService) {
     this.divisionService.divisionGet().subscribe((resp)=>{
       this.divisions = resp.divisions
      })
     
   }
  locationAdd(){
    if(this.placeHolders.title.trim().length === 0){return}
    if(this.placeHolders.description.trim().length === 0){return}
    if(this.placeHolders.division.trim().length === 0){return}
    if(this.placeHolders.schedule.trim().length === 0){return}
    if(this.placeHolders.number.trim().length === 0){return}

    this.locationService.postLocation(this.placeHolders).subscribe(
      (resp) => {
        console.log(resp)
      }
    )


  }


}
