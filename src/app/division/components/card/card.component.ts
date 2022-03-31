import { DivisionService } from './../../services/division.service';
import { Component, Input, OnInit } from '@angular/core';
import { IDivision } from 'src/interfaces/division.interface';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() division!: IDivision
  public isRemoved : boolean = false;

  constructor(private  divisionService:DivisionService) { }

  ngOnInit(): void {
  }
  remove(){
    this.isRemoved = true
    this.divisionService.divisionDelete(this.division._id).subscribe(
      (resp) => {
        console.log(resp.result[0].name)
      }
    )
  }


}
