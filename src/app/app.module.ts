import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

const appRoutes: Routes = [
  {
    path: '', component: DashboardComponent, // localhost:4200/
  },
  {
    path: 'products', component: ProductsComponent, // localhost:4200/products
  },
  {
    path: 'products/:id', component: EditProductComponent, // localhost:4200/products
  },
  {
    path: 'users', component: UsersComponent  // localhost:4200/users
  },
  {
    path: 'users/:id', component: UserComponent  // localhost:4200/users
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    UsersComponent,
    DashboardComponent,
    UserComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
