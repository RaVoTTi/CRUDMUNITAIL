import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationService } from './../../services/location.service';
import { DivisionService } from './../../../division/services/division.service';
import { IdName } from './../../../../interfaces/division.interface';
import {
  LocationPost,
  locationGeneric,
} from 'src/interfaces/location.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent {
  @Input() placeHolders: LocationPost = locationGeneric;
  @Input() title!: string;
  @Input() add: boolean = true;
  @Input() id: string = '';
  divisions: IdName[] = [];
  terminoErr: string = ''

  myForm :FormGroup =  this.fb.group({
    title: [,[Validators.required,Validators.minLength(4) ]],
    description: [,[Validators.required,,Validators.minLength(4)]],
    division: [,[Validators.required]],
    number:[,[Validators.required, Validators.min(1000)]],
    schedule:[,[Validators.required]],
    urlImage:[],
    urlLocation:[]

  })

  constructor(
    private fb : FormBuilder,
    private locationService: LocationService,
    private divisionService: DivisionService,

  ) {


  }
  ngOnInit(): void {
    this.divisionService.divisionGet().subscribe((resp) => {
      this.divisions = resp.divisions;
    });
  }
  submit() {

    if (this.add === true) {
      this.locationAdd();
    } else {
      this.locationEdit();
    }
    
  }
  validateCamp(key:string){
    return this.myForm.controls[key].errors && this.myForm.controls[key].touched 
  }
  locationAdd() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return}
      console.log(this.myForm.value)
    // this.locationService.postLocation()
    //   .subscribe((resp) => {
    //   console.log(resp.location);
    // });
    this.myForm.reset()    
  }
  locationEdit() {

    this.myForm.reset(this.placeHolders)
    // this.locationService
    //   .putLocation(this.myForm.value, this.id)
    //   .subscribe((resp) => {
    //     this.placeHolders = locationGeneric
    //     console.log(resp.location);
    //   });

  }
}
