import { DivisionService } from './../../services/division.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent {
  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required]],
  });
  constructor(
    private divisionService: DivisionService,
    private fb: FormBuilder
  ) {}

  submit() {
    console.log(this.myForm.value);
    this.divisionService
      .divisionPost(this.myForm.value.name)
      .subscribe((resp) => {
        if (resp.ok === true) {
          Swal.fire({
            icon: 'success',
            title: resp.msg,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: resp.msg,
          });
        }
      });
  }
}
