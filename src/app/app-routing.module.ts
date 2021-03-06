import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DispatchHistoryComponent } from './dispatch-history/dispatch-history.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { ViewDispatchComponent } from './view-dispatch/view-dispatch.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products/:name', component: ProductsComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addProduct/:category', component: AddProductComponent },
  { path: 'dispatch', component: DispatchComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'history', component: DispatchHistoryComponent },
  { path: 'view-dispatch/:id', component: ViewDispatchComponent },

  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
