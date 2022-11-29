import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from '../shared/model/data';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Iproduct[] = [];
  activeProductId:number = 1;
  constructor(private productService : ProductsService, 
      private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.route.params
          .subscribe((param:Params) => console.log(param)
          )
  }

}
