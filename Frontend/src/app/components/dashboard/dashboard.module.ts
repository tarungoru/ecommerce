import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { ProductCategoryListComponent } from "./components/product-category-list/product-category-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CreateCategoryComponent } from "./components/create-category/create-category.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { ImageManagerComponent } from "./dialogs/image-manager/image-manager.component";
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSliderModule } from "@angular/material/slider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { CommonDashboardService } from "./common-dashboard.service";


@NgModule({
    declarations: [
        DashboardComponent,
        OrderListComponent,
        ProductCategoryListComponent,
        ProductListComponent,
        CreateCategoryComponent,
        CreateProductComponent,
        ImageManagerComponent,
        DashboardMainComponent,
    ],
    imports: [
        CommonModule,
        DashBoardRoutingModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatSliderModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginator,
        MatSnackBarModule,
        HttpClientModule
    ],
    providers: [CommonDashboardService]
})
export class DashBoardModule { }