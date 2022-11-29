import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 
  {
    path: '', component: DashboardComponent, title: "DashBoard" // localhost:4200/
  },
  {
    path: 'products', component: ProductsComponent, title: "Products",
    children: [
      {
        path: ':id/edit', component: EditProductComponent,
      },
      {
        path: ':id', component: ProductComponent,
      },
    ]

  },

  {
    path: 'users', component: UsersComponent, title: "Users",  // localhost:4200/users
    children: [
      { path: ':id', component: UserComponent }
    ]
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  },
  {
    path : '**', redirectTo : 'page-not-found'
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
