import { HeaderComponent } from "./components/header/header.component";
import { CartPageComponent } from "./components/cart-page/cart-page.component";
import { NgModule } from "@angular/core";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { ViewProductComponent } from "./components/view-product/view-product.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { ProductCategoryComponent } from "./components/product-category/product-category.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from './public/public.component';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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


@NgModule({
    declarations: [
        HeaderComponent,
        CartPageComponent,
        MainPageComponent,
        ViewProductComponent,
        LoginPageComponent,
        ProductCategoryComponent,
        ProductDetailsComponent,
        FooterComponent,
        PublicComponent,
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
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
    ]
})
export class PublicModule { }