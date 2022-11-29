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
<<<<<<< HEAD
  activeProductId:number = 1;
  constructor(private productService : ProductsService, 
      private route : ActivatedRoute) { }
=======
  slectedProduct:number = 3
  constructor(private productService : ProductsService,
    private route : ActivatedRoute) { }
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.route.params
          .subscribe((param:Params) => console.log(param)
          )
  }

}
