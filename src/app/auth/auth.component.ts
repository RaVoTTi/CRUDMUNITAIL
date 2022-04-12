import { IUserLogin } from './../../interfaces/auth.interface';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent {
  btnDisable: boolean = false;
  authForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
    this.btnDisable = true;
    // Swal.fire({
    //   icon: 'question',
    //   title: 'Iniciara correctamente??'
    // });

    this.authService.login(this.authForm.value).subscribe((resp) => {
      if (resp.ok === true) {
        this.router.navigateByUrl('/dashboard/location');
      } else {
        Swal.fire({
          icon: 'error',
          title: resp.msg || 'Error with connection',
        });
      }
      this.btnDisable = false;
    });
  }

  validateCamp(key: string) {
    return (
      this.authForm.controls[key].errors && this.authForm.controls[key].touched
    );
  }
}
