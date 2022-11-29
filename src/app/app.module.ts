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
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    UsersComponent,
    DashboardComponent,
    UserComponent,
    ProductComponent,
    EditProductComponent,
<<<<<<< HEAD
    PageNotFoundComponent
=======
    LoginComponent
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
