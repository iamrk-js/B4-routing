import { Injectable } from '@angular/core';
import { Iuser } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Iuser[] = [
    {
      userName: "July",
      id: 1
    },
    {
      userName: "Jhon",
      id: 2
    },
    {
      userName: "May",
      id: 3
    }
  ]
  constructor() { }

  getAllUsers(): Iuser[] {
    return this.users;
  }

  getUser(id:number){
    return this.users.find(user =>  user.id === id)
  }

}
