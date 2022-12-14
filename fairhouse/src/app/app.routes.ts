import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'details', component: DetailsComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  }
];

export default appRoutes;
