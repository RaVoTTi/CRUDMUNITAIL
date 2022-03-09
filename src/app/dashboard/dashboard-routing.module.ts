import { DashboardComponent } from './appbar/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
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
