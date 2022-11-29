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
      pStatus: "In Progress",
      editStatus: 1
    },
    {
      pname: "SamSung 43 TV ",
      pId: 2,
      pStatus: "Dispached",
      editStatus: 1
    },
    {
      pname: "Iphone",
      pId: 3,
      pStatus: "Delivered",
      editStatus: 0
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
