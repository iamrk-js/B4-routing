import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: '', component: LoginComponent, // localhost:4200/
  },
  {
    path: 'home', canActivate:[AuthGuard], component: DashboardComponent, // localhost:4200/
  },
  {
    path: 'products',canActivate:[AuthGuard], component: ProductsComponent,
    children: [
      { path: ':id', component: ProductComponent, },
      { path: ':id/edit', component: EditProductComponent, }
    ]
    // localhost:4200/products
  },
  {
    path: 'products/:id', component: EditProductComponent, // localhost:4200/products
  },
  {
    path: 'users',canActivate:[AuthGuard], component: UsersComponent  // localhost:4200/users
    , children: [
      { path: ':id', component: UserComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
