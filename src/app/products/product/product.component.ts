import { Component, OnInit } from '@angular/core';
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
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.product = this.productService.getProduct(this.productId)
  }

}
