import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderpizzaComponent } from './components/orderpizza/orderpizza.component';
import { BuildpizzaComponent } from './components/buildpizza/buildpizza.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'orderPizza',component:OrderpizzaComponent},
  {path:'buildPizza',component:BuildpizzaComponent},
  {path:'shoppingCart',component:ShoppingcartComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
