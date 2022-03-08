import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationComponent } from './location/location.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLocationComponent } from './home-location/home-location.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLocationComponent,
    children: [
      {
        path: '',
        component: LocationComponent,
      },
      {
        path: 'view',
        component: LocationViewComponent,
      },
      {
        path: 'edit',
        component: LocationEditComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
