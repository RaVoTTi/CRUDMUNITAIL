import { Component, Input } from '@angular/core';

import { LocationService } from './../../services/location.service';
import { DivisionService } from './../../../division/services/division.service';
import { IdName } from './../../../../interfaces/division.interface';
import {
  LocationPost,
  locationGeneric,
} from 'src/interfaces/location.interface';
import { ActivatedRoute } from '@angular/router';

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
  division: string = '';


  constructor(
    private locationService: LocationService,
    private divisionService: DivisionService,

  ) {
    this.divisionService.divisionGet().subscribe((resp) => {
      this.divisions = resp.divisions;
    });

  }
  submit() {
    if (this.placeHolders.title.trim().length === 0) {
      return;
    }
    if (this.placeHolders.description.trim().length === 0) {
      return;
    }
    if (this.placeHolders.division.trim().length === 0) {
      return;
    }
    if (this.placeHolders.schedule.trim().length === 0) {
      return;
    }
    if (this.placeHolders.number.trim().length === 0) {
      return;
    }
    if (this.add === true) {
      this.locationAdd();
    } else {
      this.locationEdit();
    }
  }
  locationAdd() {
    this.locationService.postLocation(this.placeHolders).subscribe((resp) => {
      console.log(resp.location);
    });
    this.placeHolders = locationGeneric;
  }
  locationEdit() {
    this.locationService
      .postEditLocation(this.placeHolders, this.id)
      .subscribe((resp) => {
        console.log(resp.location);
      });
    this.placeHolders = locationGeneric;
  }
}
