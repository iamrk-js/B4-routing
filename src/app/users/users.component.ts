import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../shared/model/data';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Iuser[] = [];
<<<<<<< HEAD
  activeUserId:number = 1;
=======
  activeUserId:number = 1
>>>>>>> 9231973d0ed1cecacab86a1da23d2075261422df
  constructor(
          private usersService: UsersService, 
          private router : Router
            ) {
   
  }

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers()
  }
  gotoProducts(){
    this.router.navigate(['users'])
  }
}
