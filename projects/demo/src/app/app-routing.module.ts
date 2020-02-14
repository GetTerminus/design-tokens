import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule, ExtraOptions,
} from '@angular/router';

import { ColorComponent } from './color/color.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: '**',
    redirectTo: '/color',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
