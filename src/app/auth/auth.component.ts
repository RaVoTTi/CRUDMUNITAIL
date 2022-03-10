import { UserLogin } from './../../interfaces/auth.interface';
import { AuthService } from './auth.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent {
  userLogin: UserLogin = {
    email:'',
    password:'',
    
  }

  constructor(private router:Router, private authService:AuthService) { }

  login(){
    if(this.userLogin.email.trim().length === 0){return}
    if(this.userLogin.password.trim().length === 0){return}
 
    this.authService.login(this.userLogin).subscribe(
      (resp)=>{
        if(resp.user){
          this.router.navigate(['./dashboard/location'])
        }
      }
    )
  }


}
