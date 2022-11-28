import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Iproduct | undefined;
  productId : number = 3;
  constructor(private productService : ProductsService,
    private router : Router
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.route.params
            .subscribe((prams : Params) => {
              this.productId = +prams['id'];
              this.product = this.productService.getProduct(this.productId);
            })
  }
  goToEditProduct(){
    this.router.navigate(['/products', this.productId, 'edit'], {
      relativeTo : this.route,
      queryParamsHandling : 'preserve'
    })
  }
}
