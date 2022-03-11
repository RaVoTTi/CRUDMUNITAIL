import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-err-form',
  templateUrl: './err-form.component.html',
})
export class ErrFormComponent implements OnInit {
  @Input() terminoErr!:string
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    
  }

}
