import {  locationGetGeneric,LocationGet } from 'src/interfaces/location.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [
    `
    .spacer {
  flex: 1;
  
}
    `
  ]
})
export class ViewComponent  {
  @Input() location: LocationGet = locationGetGeneric;

  constructor() { 

  }



}
