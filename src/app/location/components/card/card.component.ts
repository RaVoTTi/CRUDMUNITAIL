import { LocationGet } from 'src/interfaces/location.interface';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input() location! : LocationGet

  constructor() { }


}
