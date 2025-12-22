import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    FooterComponent
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
    MatSliderModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
