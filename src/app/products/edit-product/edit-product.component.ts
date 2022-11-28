import { Component, OnInit, Query } from '@angular/core';
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
  canEdit: number = 1;
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

    this.route.queryParams
      .subscribe((quryparam: Params) => {
        console.log(quryparam);
        this.canEdit = +quryparam['canEdit']
      })

  }
  gotoUsers() {
    // this.router.navigate(['users'],{relativeTo : this.route})
    this.router.navigate(['users'])
  }
}

// By default path of navigate method is Absolute
// to make it relative path >> we have inject ActivatedRoute
// we have to add 2nd argument {relativeTo : this.route} in navigate method 
// localhost:4200/products/users
// DI 