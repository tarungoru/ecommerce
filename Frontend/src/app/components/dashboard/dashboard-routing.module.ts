import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { ProductCategoryListComponent } from "./components/product-category-list/product-category-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CreateCategoryComponent } from "./components/create-category/create-category.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { DashboardMainComponent } from "./dashboard-main/dashboard-main.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'order-list', pathMatch: 'full' },
          { path: 'order-list', component: OrderListComponent },
          { path: 'category-list', component: ProductCategoryListComponent },
          { path: 'product-list', component: ProductListComponent },
          { path: 'create-category', component: CreateCategoryComponent },
          { path: 'create-product', component: CreateProductComponent }
        ]
      }
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashBoardRoutingModule {
}