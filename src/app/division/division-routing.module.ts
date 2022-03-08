import { DivisionComponent } from './division/division.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDivisionComponent } from './home-division/home-division.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDivisionComponent,
    children:[ {
      path: '',
      component: DivisionComponent,
    }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionRoutingModule {}
