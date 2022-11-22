import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToProducts(){
    this.router.navigate(['products']) // localhost:4200/products
  }
}

// <!-- Routing Paths 
//   Absolute >> when we use '/' A >>> baseUrl/products  >> localhost:4200/products
//   Relative >> when we don't use '/' >> currentUrl/product >> localhost:4200/products
// -->
