import {  ILocation, ILocationPopulate, locationGenericPopulate} from './../../../../interfaces/location.interface';
import { Router } from '@angular/router';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LocationService } from './../../services/location.service';
import { DivisionService } from './../../../division/services/division.service';
import { IDivision } from 'src/interfaces/division.interface';
import { tap } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit, OnChanges {
  @Input() placeHolders!: ILocationPopulate | ILocation ;

  @Input() title!: string;
  @Input() add: boolean = true;
  @Input() id: string = '';
  divisions: IDivision[] = [];
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
  ) {}
  ngOnInit(): void {
    this.divisionService.divisionGet().subscribe((resp) => {
      this.divisions = resp.result;
    });
  }
  ngOnChanges(change: SimpleChanges) {
    if (change['placeHolders']) {
      const { _id, user, division, ...rest } =
        (change['placeHolders'].currentValue as ILocationPopulate) ||
        locationGenericPopulate;
      // console.log(rest)
      this.myForm.reset({ ...rest, division: division._id });
    }
  }
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
    console.log(this.myForm.value)
    this.locationService.locationPost(this.myForm.value).subscribe(
      (resp) => {
        if (resp.result[0]._id) {
          Swal.fire({
            icon: 'success',
            title: 'Good',
            text: 'Adicion de location correcta',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio Mal',
          });
        }
      })
    

    this.myForm.reset();
  }
  locationEdit() {
    // console.log(this.myForm.value)
    this.locationService
      .locationPut( this.id , this.myForm.value)

      .subscribe((resp) => {
        if (resp.result[0]._id) {
          this.placeHolders = resp.result[0];
          Swal.fire({
            icon: 'success',
            title: 'Good',
            text: 'Edicion de location correcta',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio Mal',
          });
        }
      });
  }
  remove() {
    this.locationService.locationDelete(this.id).subscribe((resp) => {
      console.log(resp)
      if (resp.result[0]._id) {
        this.placeHolders = resp.result[0];
        Swal.fire({
          icon: 'success',
          title: 'Good',
          text: 'Remove location correctly',
        });
        this.router.navigate(['./dashboard/location']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio Mal',
        });
      }
    });
  }
}
