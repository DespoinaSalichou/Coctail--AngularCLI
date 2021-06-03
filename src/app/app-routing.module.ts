import { NgModule } from '@angular/core';
import { DrinksComponent } from './drinks/drinks.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoctailDetailComponent } from './coctail-detail/coctail-detail.component';




const routes:Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'coctails' , component: DrinksComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:idDrink', component: CoctailDetailComponent}
]


@NgModule({
  declarations: [],
  imports:[ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
