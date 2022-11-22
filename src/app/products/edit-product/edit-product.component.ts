import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.productId = +this.route.snapshot.params['id'];
    console.log(this.productId);
    this.product = this.productService.getProduct(this.productId);
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