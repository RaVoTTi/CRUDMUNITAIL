import { LocationComponent } from './../location/location.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionComponent } from '../division/division.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'location',
        component: LocationComponent
        // loadChildren: () => import('../location/location.module').then(m => m.LocationModule)
      },
      {
        path: 'division',
        loadChildren: () => import('../division/division.module').then(m => m.DivisionModule)
      },

      // {
      //   path:'**',
      //   redirectTo: 'location'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
