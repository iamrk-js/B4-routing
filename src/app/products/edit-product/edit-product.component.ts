<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Query } from '@angular/core';
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Iproduct | undefined;
  productId: number = 3;
<<<<<<< HEAD
  canEdit:number = 1;
=======
  canEdit: number = 1;
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df
  constructor(private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);

    // this.productId = +this.route.snapshot.params['id'];
    // console.log(this.productId);
    this.route.params
      .subscribe((params: Params) => {
        this.productId = +params['id'];
        this.product = this.productService.getProduct(this.productId);
      })
<<<<<<< HEAD
      this.route.queryParams
          .subscribe((param:Params) => {
            console.log(param);
            this.canEdit = +param['canEdit']
          })
=======

    this.route.queryParams
      .subscribe((quryparam: Params) => {
        console.log(quryparam);
        this.canEdit = +quryparam['canEdit']
      })
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df

  }
  gotoUsers() {
    // this.router.navigate(['users'],{relativeTo : this.route})
    this.router.navigate(['users'])
<<<<<<< HEAD


=======
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df
  }
}

// By default path of navigate method is Absolute
// to make it relative path >> we have inject ActivatedRoute
// we have to add 2nd argument {relativeTo : this.route} in navigate method 
// localhost:4200/products/users
// DI 