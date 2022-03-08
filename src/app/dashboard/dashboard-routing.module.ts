import { DashboardComponent } from './appbar/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationModule),
        },
      {
        path: 'division',
        loadChildren: () => import('../division/division.module').then(m => m.DivisionModule)
      },

      {
        path:'**',
        redirectTo: 'location'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
