import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderListComponent } from './components/dashboard/components/order-list/order-list.component';
import { ProductCategoryListComponent } from './components/dashboard/components/product-category-list/product-category-list.component';
import { ProductListComponent } from './components/dashboard/components/product-list/product-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateCategoryComponent } from './components/dashboard/components/create-category/create-category.component';
import { CommonDashboardService } from './components/dashboard/common-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './components/dashboard/components/create-product/create-product.component';
import { ImageManagerComponent } from './components/dashboard/dialogs/image-manager/image-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartPageComponent,
    MainPageComponent,
    ViewProductComponent,
    LoginPageComponent,
    ProductCategoryComponent,
    ProductDetailsComponent,
    FooterComponent,
    DashboardComponent,
    OrderListComponent,
    ProductCategoryListComponent,
    ProductListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ImageManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
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
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
