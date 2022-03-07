import { DivisionComponent } from './division.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[ {
      path: 'fff',
      component: DivisionComponent,
    }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionRoutingModule {}
