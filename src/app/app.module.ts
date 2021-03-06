import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { ProductsComponent } from './products/products.component';
import { CategoryService } from './services/category.service';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DispatchHistoryComponent } from './dispatch-history/dispatch-history.component';
import { ViewDispatchComponent } from './view-dispatch/view-dispatch.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    CategoriesComponent,
    CategoryItemComponent,
    ProductsComponent,
    ProductItemComponent,
    AddProductComponent,
    AddCategoryComponent,
    CartComponent,
    CartItemComponent,
    DispatchComponent,
    CheckoutComponent,
    DispatchHistoryComponent,
    ViewDispatchComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
