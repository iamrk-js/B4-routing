import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/model/data';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Iproduct[] = []
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
