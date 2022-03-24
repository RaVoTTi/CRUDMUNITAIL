import { ILocation, ILocationPopulate } from 'src/interfaces/location.interface';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
    div {
      cursor: pointer
    }
    `
  ]
})
export class CardComponent {

  @Input() location! : ILocationPopulate

  constructor() { }


}
