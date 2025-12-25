import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '', component: MainPageComponent }, 
  { path: 'cart', component: CartPageComponent },
  { path: 'view', component: ViewProductComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'products', component: ProductCategoryComponent },
  { path: 'products-view/:category/:name', component: ProductDetailsComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
