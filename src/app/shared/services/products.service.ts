import { Injectable } from '@angular/core';
import { Iproduct } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArray: Iproduct[] = [
    {
      pname: "SamSung M31",
      pId: 1,
      pStatus: "In Progress"
    },
    {
      pname: "SamSung 43 TV ",
      pId: 2,
      pStatus: "Dispached"
    },
    {
      pname: "Iphone",
      pId: 3,
      pStatus: "Delivered"
    }
  ]
  constructor() { }

  getAllProducts(): Iproduct[] {
    return this.productsArray;
  }

  getProduct(id:number){
    return this.productsArray.find(prod => prod.pId === id)
  }
}
