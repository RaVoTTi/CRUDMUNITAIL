import { DivisionService } from './../../services/division.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent  {

  myForm: FormGroup = this.fb.group({
    name: [,[Validators.required]]
  })
  constructor (private divisionService:DivisionService, private fb:FormBuilder) { }

  submit(){
    console.log(this.myForm.value)
    this.divisionService.divisionPost(this.myForm.value.name).subscribe(
      resp => {
        console.log(resp.division.name)
      }
    )
  }
}
