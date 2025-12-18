import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' }, { path: 'cart', component: CartPageComponent },
  { path: '', component: MainPageComponent }, {path: 'view', component: ViewProductComponent},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
