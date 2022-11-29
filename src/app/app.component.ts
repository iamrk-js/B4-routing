import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routing';
  isLoggedIn: boolean = true;
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
   this.isLoggedIn = this.authService.getLoggedInStatus()
  }


}
