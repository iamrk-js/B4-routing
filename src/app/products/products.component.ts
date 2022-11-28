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
  slectedProduct:number = 3
  constructor(private productService : ProductsService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
