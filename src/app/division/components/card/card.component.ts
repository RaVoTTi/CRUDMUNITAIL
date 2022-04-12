import { DivisionService } from './../../services/division.service';
import { Component, Input, OnInit } from '@angular/core';
import { IDivision } from 'src/interfaces/division.interface';
import { throwIfEmpty } from 'rxjs';
import Swal from 'sweetalert2';

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
      }
    )
  }


}
