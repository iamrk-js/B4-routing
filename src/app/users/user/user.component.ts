import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/data';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user!: Iuser | undefined;
  public userId: number = 1;
  constructor(private userService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.user = this.userService.getUser(this.userId);
    // console.log(this.user);
    console.log(this.route.snapshot.params);
    this.userId = +this.route.snapshot.params["id"];
    
    this.user = this.userService.getUser(this.userId);
    console.log(this.user);
    
  }

}
