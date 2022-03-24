import { DivisionService } from './../services/division.service';
import { Component, OnInit } from '@angular/core';
import { IDivision } from 'src/interfaces/division.interface';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styles: [
  ]
})
export class DivisionComponent implements OnInit {
  divisions: IDivision[] = []

  constructor(private divisionService: DivisionService) { }

  ngOnInit(){
    this.divisionService.divisionGet().subscribe(
      (resp )=> {
        this.divisions = resp.result
      }
    )
  }
}
