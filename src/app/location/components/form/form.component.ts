import { LocationPost, locationGeneric } from 'src/interfaces/location.interface'
import { Component, Input, OnInit } from '@angular/core';
import { LocationGet } from 'src/interfaces/location.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  @Input() placeHolders: LocationPost = locationGeneric

  constructor() { }

  ngOnInit(): void {
  }

}
