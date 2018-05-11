import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './components/show/show.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: ShowComponent},
  {path: 'comp1', component: Comp1Component},
  {path: 'comp2', component: Comp2Component},
  {path: 'comp3', component: Comp3Component},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
   
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});