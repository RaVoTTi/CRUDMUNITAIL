import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit, platformCore, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationService } from './../../services/location.service';
import { DivisionService } from './../../../division/services/division.service';
import { IdName } from './../../../../interfaces/division.interface';
import {
  
  locationGetGeneric,
  LocationGet,
} from 'src/interfaces/location.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit, OnChanges {
  @Input()placeHolders: LocationGet = locationGetGeneric ;

  @Input() title!: string;
  @Input() add: boolean = true;
  @Input() id: string = '';
  divisions: IdName[] = [];
  terminoErr: string = '';


  myForm: FormGroup = this.fb.group({
    title: [, [Validators.required, Validators.minLength(4)]],
    description: [, [Validators.required, , Validators.minLength(4)]],
    division: [, [Validators.required]],
    number: [, [Validators.required, Validators.min(1000)]],
    schedule: [, [Validators.required]],
    urlImage: [],
    urlLocation: [],
  });

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private divisionService: DivisionService,
    private router: Router
  ) {

    
  }
  ngOnInit(): void {

    this.divisionService.divisionGet().subscribe((resp) => {
      this.divisions = resp.divisions;
    });
  }
  ngOnChanges(change: SimpleChanges){
    if(change['placeHolders']){
    const {_id, user, division , ...rest} = (change['placeHolders'].currentValue as LocationGet) || locationGetGeneric
    // console.log(rest)
    this.myForm.reset( {...rest, division: division._id})
  }}
  submit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.add === true) {
      this.locationAdd();
    } else {
      this.locationEdit();
    }
  }
  validateCamp(key: string) {

    return (
      this.myForm.controls[key].errors && this.myForm.controls[key].touched
    );
  }
  locationAdd() {
  
    this.locationService.postLocation(this.myForm.value).subscribe((resp) => {
      console.log(resp.location);
    });
    this.myForm.reset();
  }
  locationEdit() {
    this.locationService
      .putLocation(this.myForm.value, this.id)
      .subscribe((resp) => {
        this.placeHolders = resp.location;
        console.log(resp)
      });
  }
  remove() {
    this.locationService.delLocation(this.id).subscribe(() => {
      this.router.navigate(['./dashboard/location']);
    });
  }
  ngOnDestroy(): void {
    this.locationService
  }
}
