import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderListComponent } from './components/dashboard/components/order-list/order-list.component';
import { ProductCategoryListComponent } from './components/dashboard/components/product-category-list/product-category-list.component';
import { ProductListComponent } from './components/dashboard/components/product-list/product-list.component';
import { CreateCategoryComponent } from './components/dashboard/components/create-category/create-category.component';
import { CreateProductComponent } from './components/dashboard/components/create-product/create-product.component';

const dashboardChildren: Routes = [
  { path: '', redirectTo: 'category-list', pathMatch: 'full' }, 
  { path: 'order-list', component: OrderListComponent },
  { path: 'category-list', component: ProductCategoryListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'create-category', component: CreateCategoryComponent},
  { path: 'create-product', component: CreateProductComponent}
];

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '', component: MainPageComponent }, 
  { path: 'cart', component: CartPageComponent },
  { path: 'view', component: ViewProductComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'products', component: ProductCategoryComponent },
  { path: 'products-view/:category/:name', component: ProductDetailsComponent },
  { path: 'dashboard', component: DashboardComponent, children: dashboardChildren}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
